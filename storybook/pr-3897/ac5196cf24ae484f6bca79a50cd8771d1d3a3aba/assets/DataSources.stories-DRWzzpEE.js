import{j as r}from"./iframe-Bk-88sEf.js";import{O as b}from"./object-table-DLbz3v7t.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C-Fg71P6.js";import{u as g}from"./useOsdkClient-p7Hx3gk-.js";import"./preload-helper-DvYlXxAP.js";import"./Table-w2KwEraW.js";import"./index-CdHmGUcS.js";import"./Dialog-Cse2Ob6V.js";import"./cross-CzjMymPe.js";import"./svgIconContainer-CJ_w5BhJ.js";import"./useBaseUiId-DES5vLxx.js";import"./InternalBackdrop-2wnNc0zw.js";import"./composite-BXvRBvIS.js";import"./index-DGx-W2pO.js";import"./index-6f90H5TT.js";import"./index-BR7LTQOs.js";import"./useEventCallback-DqbTsOIO.js";import"./SkeletonBar-CyJN-Xjm.js";import"./LoadingCell-R780WQSC.js";import"./ColumnConfigDialog-DpSlK8Z8.js";import"./DraggableList-c_O2vsqv.js";import"./search-Cyt-_x8X.js";import"./Input-U7zXtF1y.js";import"./useControlled-Cf_AiB9R.js";import"./Button-DB1Qd4Ey.js";import"./small-cross-DaPzMpTC.js";import"./ActionButton-BJA2YejZ.js";import"./Checkbox-B9A5gIer.js";import"./useValueChanged-woSaOMyv.js";import"./CollapsiblePanel-wakff4ru.js";import"./MultiColumnSortDialog-CZyyzg1l.js";import"./MenuTrigger-BnRYX-HV.js";import"./CompositeItem-DFySnHOB.js";import"./ToolbarRootContext-CXOIvMk7.js";import"./getDisabledMountTransitionStyles-laX3tK9e.js";import"./getPseudoElementBounds-DToJELRK.js";import"./chevron-down-BZoWzWGC.js";import"./index-CowKu27H.js";import"./error-2_AseInf.js";import"./BaseCbacBanner-D4QCiXA1.js";import"./makeExternalStore-OahYSLFz.js";import"./Tooltip-CTK12_Si.js";import"./PopoverPopup-BuuLyK1V.js";import"./debounce-BH4BBh9a.js";import"./tick-CO3pOylc.js";import"./DropdownField-pgFmM9K7.js";import"./isEqual-BijyGCHx.js";import"./withOsdkMetrics-CcAilitW.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
