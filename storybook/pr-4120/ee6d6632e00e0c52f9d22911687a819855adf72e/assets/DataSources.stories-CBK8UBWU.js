import{j as r}from"./iframe-DTMqKPBE.js";import{O as b}from"./object-table-BsHUN6wF.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BN-QvWSH.js";import{u as g}from"./useOsdkClient-172IoC-V.js";import"./preload-helper-CjsYpY57.js";import"./Table-DU03s7G2.js";import"./index-UDd9WuYK.js";import"./Dialog-BCGY3t42.js";import"./cross-B4qzvymc.js";import"./svgIconContainer-CTrmoxuh.js";import"./useBaseUiId-CEeKBGAz.js";import"./InternalBackdrop-BBkZ1Zk6.js";import"./composite-ythbHTkl.js";import"./index-C4q2yfqG.js";import"./index-JW1fQ_Y7.js";import"./index-a5K6iVF8.js";import"./useEventCallback-DtDN3sTJ.js";import"./SkeletonBar-B8XEOwQs.js";import"./LoadingCell-1n2Faz1K.js";import"./ColumnConfigDialog-DBo2NVl6.js";import"./DraggableList-JhsJuV4q.js";import"./search-DI2V8WRZ.js";import"./Input-7TR5u0Qr.js";import"./useControlled-BHnYSqNh.js";import"./Button-xDEOgU6J.js";import"./small-cross-CsVdUc7Z.js";import"./ActionButton-hkXpDER8.js";import"./Checkbox-CQ4B7qvq.js";import"./useValueChanged-pTbCnzad.js";import"./CollapsiblePanel-BI6FTHdI.js";import"./MultiColumnSortDialog-48DxKrQQ.js";import"./MenuTrigger-Cimzkx02.js";import"./CompositeItem-vKvJJfWL.js";import"./ToolbarRootContext-BFkkbk8n.js";import"./getDisabledMountTransitionStyles-CkPdKkG_.js";import"./getPseudoElementBounds-JkpSFn6Z.js";import"./chevron-down-CHkr5iXo.js";import"./index-BsUTfLWI.js";import"./error-DhhuqABX.js";import"./BaseCbacBanner-oJ-bR1A-.js";import"./makeExternalStore-BqhBup0t.js";import"./Tooltip-hCwJnzIt.js";import"./PopoverPopup-DWI1XAxj.js";import"./debounce-BYCLDSg8.js";import"./tick-BzPsR4V6.js";import"./DropdownField-CyxvPr-x.js";import"./isEqual-CnGd_Xos.js";import"./withOsdkMetrics-C9k-iTWj.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
