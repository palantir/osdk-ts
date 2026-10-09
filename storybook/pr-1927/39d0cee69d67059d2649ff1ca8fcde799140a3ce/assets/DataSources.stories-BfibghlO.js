import{j as r}from"./iframe-cBiyHty9.js";import{O as b}from"./object-table-DdxHR6gu.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ClPp_SCn.js";import{u as g}from"./useOsdkClient-BAx2SljP.js";import"./preload-helper-Bv3meVH3.js";import"./Table-DOWOKbmv.js";import"./index-D9svWSdg.js";import"./Dialog-D1e3reXB.js";import"./cross-6ls1LaWh.js";import"./svgIconContainer-BYeKHHBz.js";import"./useBaseUiId-DvsuiOVy.js";import"./InternalBackdrop-CkoiXEVu.js";import"./composite-CzYA3ElD.js";import"./index-BjO7MMv7.js";import"./index-AEP3bJ8p.js";import"./index-irxThoCO.js";import"./useEventCallback-DpA9bV-i.js";import"./SkeletonBar-CFxnwFPu.js";import"./LoadingCell-tIQP5ayH.js";import"./ColumnConfigDialog-D4TY98FM.js";import"./DraggableList-3zVKSQ3j.js";import"./search-BHdPsWbB.js";import"./Input-CUOeqbmp.js";import"./useControlled-CK1iqSKb.js";import"./Button-BcVzWRXY.js";import"./small-cross-Cs_0F4xM.js";import"./ActionButton-CTzhl48y.js";import"./Checkbox-Bbew-0gB.js";import"./useValueChanged-BaN3_QZu.js";import"./CollapsiblePanel-B8M_JZTW.js";import"./MultiColumnSortDialog-BSE3jK1S.js";import"./MenuTrigger-BCGw1eRt.js";import"./CompositeItem-CVN4lZoj.js";import"./ToolbarRootContext-C7-4unHr.js";import"./getDisabledMountTransitionStyles-CI3RAlpb.js";import"./getPseudoElementBounds-CxFqqadz.js";import"./chevron-down-X8NW_OEl.js";import"./index-CBnbMMaT.js";import"./error-Ct0Hv0fs.js";import"./BaseCbacBanner-QnBtoc3l.js";import"./makeExternalStore-CGJamYgh.js";import"./Tooltip-CvHPMZe4.js";import"./PopoverPopup-CUtWkbQa.js";import"./debounce-B191BFcS.js";import"./tick-VSl0kWDd.js";import"./DropdownField-DiamDw4J.js";import"./isEqual-CMnDPE7A.js";import"./withOsdkMetrics-CoTXzMQi.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
