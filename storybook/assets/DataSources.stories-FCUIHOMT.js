import{j as r}from"./iframe-BjvWEpQn.js";import{O as b}from"./object-table-Dghp8cw1.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BkvpLJm6.js";import{u as g}from"./useOsdkClient-zYvlR-4-.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DLthBjEH.js";import"./index-C0GV4moV.js";import"./Dialog-BBM57mMr.js";import"./cross-B1SVZ_Mp.js";import"./svgIconContainer-Bo_QeWGy.js";import"./useBaseUiId-CuHKCZXA.js";import"./InternalBackdrop-DqYDuaqF.js";import"./composite-DOEC86eV.js";import"./index-CX-tc54H.js";import"./index-Blnua_Xd.js";import"./index-NbBH4Ipg.js";import"./useEventCallback-DL6bVjfT.js";import"./SkeletonBar-BzIzSJzJ.js";import"./LoadingCell-PgqUTkYp.js";import"./ColumnConfigDialog-r73jCqBV.js";import"./DraggableList-BtUBQ6G2.js";import"./search-BShNJex1.js";import"./Input-mEIrwYjz.js";import"./useControlled-CIGB80Ap.js";import"./Button-D0Bo1X54.js";import"./small-cross-Db3oVUgZ.js";import"./ActionButton-DMX27iON.js";import"./Checkbox-DvdYscQS.js";import"./useValueChanged-J-bwa0r9.js";import"./CollapsiblePanel-CgTIoXrP.js";import"./MultiColumnSortDialog-CNc6LB8T.js";import"./MenuTrigger-C5cq2d3B.js";import"./CompositeItem-CsOj8GEh.js";import"./ToolbarRootContext-BFzaK2vL.js";import"./getDisabledMountTransitionStyles-D8IcwD5G.js";import"./getPseudoElementBounds-DmjliHjc.js";import"./chevron-down-CIsozBEz.js";import"./index-CpObZ_CB.js";import"./error-0abisA4-.js";import"./BaseCbacBanner-DbMNALsK.js";import"./makeExternalStore-CgVUsbup.js";import"./Tooltip-CbDWIJZu.js";import"./PopoverPopup-DO5dKOfH.js";import"./debounce-DYSSvrJG.js";import"./tick-DxLK2qZe.js";import"./DropdownField-BlMUNrNh.js";import"./isEqual-CicbEOiS.js";import"./withOsdkMetrics-BESKZGnm.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
