var capDesc = {
    'SETPCAP': 'Modify process capabilities.',
    'MKNOD': 'Create special files using mknod(2).',
    'AUDIT_WRITE': 'Write records to kernel auditing log.',
    'CHOWN': 'Make arbitrary changes to file UIDs and GIDs (see chown(2)).',
    'NET_RAW': 'Use RAW and PACKET sockets.',
    'DAC_OVERRIDE': 'Bypass file read, write, and execute permission checks.',
    'FOWNER': 'Bypass permission checks on operations that normally require the file system UID of the process to match the UID of the file.',
    'FSETID': 'Don’t clear set-user-ID and set-group-ID permission bits when a file is modified.',
    'KILL': 'Bypass permission checks for sending signals.',
    'SETGID': 'Make arbitrary manipulations of process GIDs and supplementary GID list.',
    'SETUID': 'Make arbitrary manipulations of process UIDs.',
    'NET_BIND_SERVICE': 'Bind a socket to internet domain privileged ports (port numbers less than 1024).',
    'SYS_CHROOT': 'Use chroot(2), change root directory.',
    'SETFCAP': 'Set file capabilities.',
    'SYS_MODULE': 'Load and unload kernel modules.',
    'SYS_RAWIO': 'Perform I/O port operations (iopl(2) and ioperm(2)).',
    'SYS_PACCT': 'Use acct(2), switch process accounting on or off.',
    'SYS_ADMIN': 'Perform a range of system administration operations.',
    'SYS_NICE': 'Raise process nice value (nice(2), setpriority(2)) and change the nice value for arbitrary processes.',
    'SYS_RESOURCE': 'Override resource Limits.',
    'SYS_TIME': 'Set system clock (settimeofday(2), stime(2), adjtimex(2)); set real-time (hardware) clock.',
    'SYS_TTY_CONFIG': 'Use vhangup(2); employ various privileged ioctl(2) operations on virtual terminals.',
    'AUDIT_CONTROL': 'Enable and disable kernel auditing; change auditing filter rules; retrieve auditing status and filtering rules.',
    'MAC_ADMIN': 'Allow MAC configuration or state changes. Implemented for the Smack LSM.',
    'MAC_OVERRIDE': 'Override Mandatory Access Control (MAC). Implemented for the Smack Linux Security Module (LSM).',
    'NET_ADMIN': 'Perform various network-related operations.',
    'SYSLOG': 'Perform privileged syslog(2) operations.',
    'DAC_READ_SEARCH': 'Bypass file read permission checks and directory read and execute permission checks.',
    'LINUX_IMMUTABLE': 'Set the FS_APPEND_FL and FS_IMMUTABLE_FL i-node flags.',
    'NET_BROADCAST': 'Make socket broadcasts, and listen to multicasts.',
    'IPC_LOCK': 'Lock memory (mlock(2), mlockall(2), mmap(2), shmctl(2)).',
    'IPC_OWNER': 'Bypass permission checks for operations on System V IPC objects.',
    'SYS_PTRACE': 'Trace arbitrary processes using ptrace(2).',
    'SYS_BOOT': 'Use reboot(2) and kexec_load(2), reboot and load a new kernel for later execution.',
    'LEASE': 'Establish leases on arbitrary files (see fcntl(2)).',
    'WAKE_ALARM': 'Trigger something that will wake up the system.',
    'BLOCK_SUSPEND': 'Employ features that can block system suspend.'
};

function ContainerCapabilities() {
    // all capabilities can be found at https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities
    return [
        new ContainerCapability('SETPCAP', true),
        new ContainerCapability('MKNOD', true),
        new ContainerCapability('AUDIT_WRITE', true),
        new ContainerCapability('CHOWN', true),
        new ContainerCapability('NET_RAW', true),
        new ContainerCapability('DAC_OVERRIDE', true),
        new ContainerCapability('FOWNER', true),
        new ContainerCapability('FSETID', true),
        new ContainerCapability('KILL', true),
        new ContainerCapability('SETGID', true),
        new ContainerCapability('SETUID', true),
        new ContainerCapability('NET_BIND_SERVICE', true),
        new ContainerCapability('SYS_CHROOT', true),
        new ContainerCapability('SETFCAP', true),
        new ContainerCapability('SYS_MODULE', false),
        new ContainerCapability('SYS_RAWIO', false),
        new ContainerCapability('SYS_PACCT', false),
        new ContainerCapability('SYS_ADMIN', false),
        new ContainerCapability('SYS_NICE', false),
        new ContainerCapability('SYS_RESOURCE', false),
        new ContainerCapability('SYS_TIME', false),
        new ContainerCapability('SYS_TTY_CONFIG', false),
        new ContainerCapability('AUDIT_CONTROL', false),
        new ContainerCapability('MAC_ADMIN', false),
        new ContainerCapability('MAC_OVERRIDE', false),
        new ContainerCapability('NET_ADMIN', false),
        new ContainerCapability('SYSLOG', false),
        new ContainerCapability('DAC_READ_SEARCH', false),
        new ContainerCapability('LINUX_IMMUTABLE', false),
        new ContainerCapability('NET_BROADCAST', false),
        new ContainerCapability('IPC_LOCK', false),
        new ContainerCapability('IPC_OWNER', false),
        new ContainerCapability('SYS_PTRACE', false),
        new ContainerCapability('SYS_BOOT', false),
        new ContainerCapability('LEASE', false),
        new ContainerCapability('WAKE_ALARM', false),
        new ContainerCapability('BLOCK_SUSPEND', false)
    ].sort(function (a, b) {
        return a.capability < b.capability ? -1 : 1;
    });
}

function ContainerCapability(cap, allowed) {
    this.capability = cap;
    this.allowed = allowed;
    this.description = capDesc[cap];
}