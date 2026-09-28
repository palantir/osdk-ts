import{j as r}from"./iframe-CzOIzVud.js";import{O as b}from"./object-table-BiaV50TY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CNnoFntD.js";import{u as g}from"./useOsdkClient-Cfr0VwOI.js";import"./preload-helper-CwMKM08Q.js";import"./Table-C1slSHqd.js";import"./index-CTmIGBdU.js";import"./Dialog-DDNGSzjz.js";import"./cross-ChoO-hHZ.js";import"./svgIconContainer-0bhWATaq.js";import"./useBaseUiId-PA6AbvCv.js";import"./InternalBackdrop-8vONEObA.js";import"./composite-CCnWWb1N.js";import"./index-CYHilSIV.js";import"./index-OcnJrvDb.js";import"./index-CeqpJRDR.js";import"./useEventCallback-e2owZAXd.js";import"./SkeletonBar-BM-didmo.js";import"./LoadingCell-GADOyGu6.js";import"./ColumnConfigDialog-DTctQD0N.js";import"./DraggableList-BRQYiX0W.js";import"./search-OylK7gf9.js";import"./Input-C7TpWAR_.js";import"./useControlled-Bl4FNa4w.js";import"./Button-PAMPzLp5.js";import"./small-cross-Cev--Ndg.js";import"./ActionButton-BhhEiGs3.js";import"./Checkbox-C-AKjDp-.js";import"./useValueChanged-DAu4NU-7.js";import"./CollapsiblePanel-Cfd_4ZcG.js";import"./MultiColumnSortDialog-Cgs8kePe.js";import"./MenuTrigger-BflBD4VN.js";import"./CompositeItem-A6EkfQUI.js";import"./ToolbarRootContext-CMaoaTCy.js";import"./getDisabledMountTransitionStyles-Dii4bpI2.js";import"./getPseudoElementBounds-B02vA_g5.js";import"./chevron-down-Cb1symQ7.js";import"./index-BFY6m5n5.js";import"./error-bNK0ajAf.js";import"./BaseCbacBanner-X2T3Xpv6.js";import"./makeExternalStore-BLR6RjGC.js";import"./Tooltip-DObflQ9W.js";import"./PopoverPopup-lEB4hKfS.js";import"./debounce-C1RT7wUt.js";import"./tick-sKwgcsDW.js";import"./DropdownField-CImlhZV3.js";import"./isEqual-C17Xnhpn.js";import"./withOsdkMetrics-C2KUxQ8x.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
