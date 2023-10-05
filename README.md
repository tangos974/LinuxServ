# LinuxServ
Project of Creating a home server
This is mostly so I can keep track of what I have done.


DONE:

- Install ubuntu server (22.04) on old macbook (2014)

- Setup secure SSH over LAN from desktop and laptop into server:
        -  Disable direct root login (1.3)
        -  Use ssh keys (1.2)

- Make it so closing the lid of the macbook shuts off the screen but not the computer (2.1)
  
- Set static IP address (3.1, 3.2, 3.3)

- Install Web server software (Apache)

TODO:

- Learn about Ansible PLaybooks and use them
  https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_intro.html

- Configure DNS

- Setup Firewall

- Auto updates?


- Setup NAS over LAN (Samba?)





Sources:
- 1. Security:
          - General security good practices: https://www.youtube.com/watch?v=fKuqYQdqRIs
          - https://phoenixnap.com/kb/generate-setup-ssh-key-ubuntu
          - https://www.howtogeek.com/828538/how-and-why-to-disable-root-login-over-ssh-on-linux/
- 2. Linux Sysadmin:
          - AutoUpdates + physicalconstraints : https://www.mkeesey.me/posts/macbook-server/
-3. Networking:
          - Example (deprecated) https://linuxopsys.com/topics/configure-static-ip-address-on-ubuntu-20-04
          - Full Netplan guide: https://linuxconfig.org/netplan-network-configuration-tutorial-for-beginners
          - Solving Deprecated warning netplan: https://unix.stackexchange.com/questions/681220/netplan-generate-gateway4-has-been-deprecated-use-default-routes-instead


