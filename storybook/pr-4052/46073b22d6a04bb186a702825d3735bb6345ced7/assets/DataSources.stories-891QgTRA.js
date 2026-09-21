import{j as r}from"./iframe-ErFjiRdR.js";import{O as b}from"./object-table-QyogTFES.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CewCP_Pa.js";import{u as g}from"./useOsdkClient-B2bg1Zbb.js";import"./preload-helper-QXATeijz.js";import"./Table-DJVVBOBS.js";import"./index-CprRWtZ0.js";import"./Dialog-ckZVKOH3.js";import"./cross-DA1xIqSH.js";import"./svgIconContainer-DwCJmDQ6.js";import"./useBaseUiId-q1R-2ocn.js";import"./InternalBackdrop-BVX_h7aO.js";import"./composite-BNsKQKoz.js";import"./index-DyME0HO3.js";import"./index-R776mpCr.js";import"./index-CioP4s9H.js";import"./useEventCallback-CsjBQJGO.js";import"./SkeletonBar-9G0HH7I4.js";import"./LoadingCell-DvDzoNzg.js";import"./ColumnConfigDialog-WsY2GTDy.js";import"./DraggableList-R0EEiGI7.js";import"./search-D70lAymL.js";import"./Input-5vpb7ex0.js";import"./useControlled-y5HTd1hS.js";import"./Button-Bkuli5yv.js";import"./small-cross-W7MFHZ4g.js";import"./ActionButton-BmfgSZLa.js";import"./Checkbox-DAHD9CoB.js";import"./useValueChanged-sN946PV6.js";import"./CollapsiblePanel-Cb17J6r_.js";import"./MultiColumnSortDialog-Chshm_fF.js";import"./MenuTrigger-DfZeTdKg.js";import"./CompositeItem-CXu476SC.js";import"./ToolbarRootContext-DKYtYCzN.js";import"./getDisabledMountTransitionStyles-CudQAnha.js";import"./getPseudoElementBounds-BWDQXgDF.js";import"./chevron-down-8N5DEpE8.js";import"./index-B68TyCJi.js";import"./error-D-xAMd6a.js";import"./BaseCbacBanner-8yr2Itnn.js";import"./makeExternalStore-BmDH-BLi.js";import"./Tooltip-DVQuoGJ7.js";import"./PopoverPopup-CBq8CNSA.js";import"./debounce-DAbWe4HY.js";import"./tick-CsfDOtgs.js";import"./DropdownField-CxUf6e52.js";import"./isEqual-Bsn6PwYT.js";import"./withOsdkMetrics-LLxyWREg.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
