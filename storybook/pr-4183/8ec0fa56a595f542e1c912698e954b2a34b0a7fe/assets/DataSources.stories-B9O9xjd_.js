import{j as r}from"./iframe-C4U2JRoY.js";import{O as b}from"./object-table-C8YPtxGL.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CYzJtGJ3.js";import{u as g}from"./useOsdkClient-BAmivmrL.js";import"./preload-helper-DN3ZEv3h.js";import"./Table-DemeUw8L.js";import"./index-sST8iqoh.js";import"./Dialog-CxbAQOcE.js";import"./cross-BjW1gIQB.js";import"./svgIconContainer-Bqyk4ukb.js";import"./useBaseUiId-t75_1mYb.js";import"./InternalBackdrop-DLXodZp2.js";import"./composite-DyzBkCx-.js";import"./index-CwxTqGIm.js";import"./index-BAotWep5.js";import"./index-C6xQgxB6.js";import"./useEventCallback-DztBvHUA.js";import"./SkeletonBar-CA43xrQl.js";import"./LoadingCell-CeMmlt8X.js";import"./ColumnConfigDialog-B_DBv9UA.js";import"./DraggableList-f63FvW7O.js";import"./search-DGpCoBRn.js";import"./Input-Bt5QmGO0.js";import"./useControlled-DgRL6il9.js";import"./Button-_EOncV-8.js";import"./small-cross-CD5bCdAl.js";import"./ActionButton-NrurrT_q.js";import"./Checkbox-B0bJPmc0.js";import"./useValueChanged-CVpGeeut.js";import"./CollapsiblePanel-e6QLkFeN.js";import"./MultiColumnSortDialog-DxmTCiTh.js";import"./MenuTrigger-Ds-m-Ojk.js";import"./CompositeItem-2E0ykI3P.js";import"./ToolbarRootContext-BAVcRF15.js";import"./getDisabledMountTransitionStyles-BTRmRtbC.js";import"./getPseudoElementBounds-Gnx7A5W2.js";import"./chevron-down-dh5AFKhr.js";import"./index-DXHuqct4.js";import"./error-CEamcZeP.js";import"./BaseCbacBanner-DOipROPK.js";import"./makeExternalStore-BDSIsETy.js";import"./Tooltip-CcfNdB-z.js";import"./PopoverPopup-DnvLtuHj.js";import"./debounce-X49geldC.js";import"./tick-BWNn2Zwm.js";import"./DropdownField-DM7w76cT.js";import"./isEqual-UzAaeF-g.js";import"./withOsdkMetrics-DqoHWRxV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
