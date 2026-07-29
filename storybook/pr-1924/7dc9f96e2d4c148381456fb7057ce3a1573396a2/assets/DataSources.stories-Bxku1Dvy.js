import{j as r}from"./iframe-BlKzkmtn.js";import{O as b}from"./object-table-BxYj44_e.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Do-TAT1j.js";import{u as g}from"./useOsdkClient-C0bP3yO7.js";import"./preload-helper-CJb7ZBwp.js";import"./Table-DZAx6NnT.js";import"./index-BE33dGXM.js";import"./Dialog-Dfpzi-SI.js";import"./cross-CDSlzZ_j.js";import"./svgIconContainer-DTMdlGkn.js";import"./useBaseUiId-QFjXRhmc.js";import"./InternalBackdrop-eJVev9cg.js";import"./composite-DWj46q8f.js";import"./index-DVqE6h_f.js";import"./index-EtRT7Ia5.js";import"./index-gHjVE7W3.js";import"./useEventCallback-5TsxIkx3.js";import"./SkeletonBar-Dnih6rCl.js";import"./LoadingCell-fAFZo53q.js";import"./ColumnConfigDialog-DN5DmLBx.js";import"./DraggableList-BX1X0rhs.js";import"./search-DTlUtZ9H.js";import"./Input-BdMnwJ3c.js";import"./useControlled-C8Xhu7sh.js";import"./isEqual-90GY5dh2.js";import"./isObject-ClZ4w9zb.js";import"./Button-CR_nzyNk.js";import"./ActionButton-BUcZVkw2.js";import"./Checkbox-Cz_V7Kd7.js";import"./useValueChanged-CuTY1Q7Q.js";import"./CollapsiblePanel-Bo0E7Alp.js";import"./MultiColumnSortDialog-CQnsfhBk.js";import"./MenuTrigger-DdkeI051.js";import"./CompositeItem-DdICfa7h.js";import"./ToolbarRootContext-DkjfOPRa.js";import"./getDisabledMountTransitionStyles-CkgNCITp.js";import"./getPseudoElementBounds-yhK2vVLh.js";import"./chevron-down-CEf4r7Rj.js";import"./index-DXLdK1XH.js";import"./error-xYUSpHPn.js";import"./BaseCbacBanner-DACFTWfI.js";import"./makeExternalStore-CI1ZTcF0.js";import"./Tooltip-gnzZ7hep.js";import"./PopoverPopup-D-yg0k83.js";import"./toNumber-CM2f851I.js";import"./tick-DIfPNuKj.js";import"./DropdownField-DsRXFEg5.js";import"./withOsdkMetrics-DjHdw3vL.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:t=>{const T=g()(i).where({jobProfile:"Marketing Manager"});return r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t,objectType:i,objectSet:T})})},play:async({canvasElement:t})=>{const e=d(t);await e.findAllByText("Marketing Manager"),await n(e.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await n(e.queryByText("Content Manager")).not.toBeInTheDocument()}},o={args:{objectType:u},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:t=>r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t})}),play:async({canvasElement:t})=>{const e=d(t);await e.findByText(h),await n(e.getByText("Name")).toBeInTheDocument(),await n(e.getByText("Email")).toBeInTheDocument()}};var c,s,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  },
  // The object set is filtered to \`jobProfile: "Marketing Manager"\`
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(canvas.getAllByText("Marketing Manager").length).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,l,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. The table shows the interface's " + "properties (email, name, employeeNumber) and any object implementing the interface " + "will be displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText(TARGET_DATA);

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const fe=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,fe as __namedExportsOrder,je as default};
