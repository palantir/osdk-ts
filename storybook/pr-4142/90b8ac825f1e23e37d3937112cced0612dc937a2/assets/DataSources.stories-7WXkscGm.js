import{j as r}from"./iframe-iZnS8oEd.js";import{O as b}from"./object-table-C4Ty0IB9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BnX1y_qE.js";import{u as g}from"./useOsdkClient-EkE0pn24.js";import"./preload-helper-Bp14nz6B.js";import"./Table-D9c2v_Jv.js";import"./index-DYpyIwVE.js";import"./Dialog-CcE2k6kD.js";import"./cross-CwJuB6vr.js";import"./svgIconContainer-CQ9YnN-K.js";import"./useBaseUiId-30R3WmkM.js";import"./InternalBackdrop-DkYxAsCO.js";import"./composite-DFXKizFH.js";import"./index-BGV0iA7n.js";import"./index-lcQmyE2o.js";import"./index-CF3zpfbh.js";import"./useEventCallback-BJQUbbjw.js";import"./SkeletonBar-B4WtYr-D.js";import"./LoadingCell-DcmBu7cA.js";import"./ColumnConfigDialog-DIJjz-s0.js";import"./DraggableList-DnKYpezS.js";import"./search-VBwZcVe4.js";import"./Input-DJavpeQK.js";import"./useControlled-D6M_jpuK.js";import"./Button-UwlMUZt9.js";import"./small-cross-LlyJGW73.js";import"./ActionButton-n6yDW2MN.js";import"./Checkbox-BbizxJnk.js";import"./useValueChanged-Dy1WlJh-.js";import"./CollapsiblePanel-DXxFmeha.js";import"./MultiColumnSortDialog-BBzzO1y2.js";import"./MenuTrigger-kFsG_HSQ.js";import"./CompositeItem-wRG5nrDT.js";import"./ToolbarRootContext-Da2ttLiC.js";import"./getDisabledMountTransitionStyles-qNwcN3KE.js";import"./getPseudoElementBounds-C9heIyNM.js";import"./chevron-down-BCGqeKWb.js";import"./index-CiXw8-sy.js";import"./error-D6yePDbl.js";import"./BaseCbacBanner-hbazI1Tu.js";import"./makeExternalStore-RezbOIS0.js";import"./Tooltip-DRVdX3dm.js";import"./PopoverPopup-CLC1eyIN.js";import"./debounce-C0yUuuvl.js";import"./tick-HBQstKrv.js";import"./DropdownField-0N17NynR.js";import"./isEqual-_DoGzm8i.js";import"./withOsdkMetrics-B-D7eEQx.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
