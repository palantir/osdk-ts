import{j as r}from"./iframe-D4hrQN2M.js";import{O as b}from"./object-table-eoyHm8rr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CRhwe2qF.js";import{u as g}from"./useOsdkClient-CRnyhdA3.js";import"./preload-helper-sZ7GZnTp.js";import"./Table-C8TaCY1N.js";import"./index-TJFGWmSW.js";import"./Dialog-Cum9z4PZ.js";import"./cross-DpkqXaMH.js";import"./svgIconContainer-B2XpTIGD.js";import"./useBaseUiId-Dd8SLm5U.js";import"./InternalBackdrop-DTcgC7in.js";import"./composite-CR-Dz-Ek.js";import"./index-DLnqSt_k.js";import"./index-BRhC0vEw.js";import"./index-DxzPebG2.js";import"./useEventCallback-Bi7T9n7X.js";import"./SkeletonBar-D2ZrCjSS.js";import"./LoadingCell-Dov4RAGc.js";import"./ColumnConfigDialog-DpEbmIIs.js";import"./DraggableList-0U2j1jDu.js";import"./search-D1Xzl9P3.js";import"./Input-CkxkdCMO.js";import"./useControlled-D7NqC10F.js";import"./Button-C5ajAHO-.js";import"./small-cross-DZUN_pWg.js";import"./ActionButton-C2k80xY4.js";import"./Checkbox-DggoX4aS.js";import"./useValueChanged-kuV8QgZ2.js";import"./CollapsiblePanel-DZyDRhH1.js";import"./MultiColumnSortDialog-Q2eGzcIB.js";import"./MenuTrigger-__HBuUTm.js";import"./CompositeItem-D42qWJYi.js";import"./ToolbarRootContext-A7T_D51T.js";import"./getDisabledMountTransitionStyles-BQuC83a6.js";import"./getPseudoElementBounds-DbN1Aq9W.js";import"./chevron-down-CPNs7Pbe.js";import"./index-CFuoKysS.js";import"./error-DLpDeju-.js";import"./BaseCbacBanner-Jj2i97NM.js";import"./makeExternalStore-CT9_9BER.js";import"./Tooltip-BcRZGxaq.js";import"./PopoverPopup-CnVnN1Uy.js";import"./debounce-CAX0ITwT.js";import"./tick-BHTu8puw.js";import"./DropdownField-BMDSt0eR.js";import"./isEqual-BbQZa-Lk.js";import"./withOsdkMetrics-V-TF07Pc.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
