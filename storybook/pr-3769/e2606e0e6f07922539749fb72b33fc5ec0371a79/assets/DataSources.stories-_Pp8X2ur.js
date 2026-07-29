import{j as r}from"./iframe-hzfvyDmq.js";import{O as b}from"./object-table-DDyvSrvK.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-nQYrbIa4.js";import{u as g}from"./useOsdkClient-BROt0Prz.js";import"./preload-helper-CdJNp2PB.js";import"./Table-S-qrfXrQ.js";import"./index-f5Cgh3Nq.js";import"./Dialog-CLxh-kiC.js";import"./cross-CRChT_Fc.js";import"./svgIconContainer-Cb51Sm7i.js";import"./useBaseUiId-DmC4LGoz.js";import"./InternalBackdrop-BkhlETTr.js";import"./composite-BH-1n-px.js";import"./index-B1JvKBAi.js";import"./index-BLrf7TRG.js";import"./index-ECL9pzkS.js";import"./useEventCallback-BVaqhbZv.js";import"./SkeletonBar-Cydm-_bj.js";import"./LoadingCell-CIwAhsfk.js";import"./ColumnConfigDialog-BHJtrFKi.js";import"./DraggableList-VIA38x-Z.js";import"./search-Cx-34oit.js";import"./Input-j4WQNWPZ.js";import"./useControlled-DAR7PUt5.js";import"./isEqual-B_G078b5.js";import"./isObject-OBBwB0n7.js";import"./Button-B5teW1fu.js";import"./ActionButton-BhhnarQt.js";import"./Checkbox-CHj0Mzen.js";import"./useValueChanged-DaH9it3g.js";import"./CollapsiblePanel-DK_WmK5Z.js";import"./MultiColumnSortDialog-DGuzWOGX.js";import"./MenuTrigger-D9MLuSAC.js";import"./CompositeItem-CjjHoPXP.js";import"./ToolbarRootContext-BGTK6XuR.js";import"./getDisabledMountTransitionStyles-Dr6IxA0r.js";import"./getPseudoElementBounds-DMqUJd8Q.js";import"./chevron-down-CrjOKJrn.js";import"./index-DO9rqWWH.js";import"./error-D9W8A-KQ.js";import"./BaseCbacBanner-RGAxCGDZ.js";import"./makeExternalStore-DOrHHMWU.js";import"./Tooltip-DcRW6kP6.js";import"./PopoverPopup-Bdz3Tdg1.js";import"./toNumber-BII_8Zj6.js";import"./tick-BCoclWAx.js";import"./DropdownField-BhHBwio3.js";import"./withOsdkMetrics-u8-t1UQo.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
