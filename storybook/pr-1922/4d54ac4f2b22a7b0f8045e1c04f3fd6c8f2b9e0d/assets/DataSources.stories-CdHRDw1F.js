import{j as r}from"./iframe-ByxoF4UB.js";import{O as b}from"./object-table-i4_SWQmL.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CGyzMjcA.js";import{u as g}from"./useOsdkClient-BdIxFpI6.js";import"./preload-helper-CXMZSjtp.js";import"./Table-DZvz2Swy.js";import"./index-87CISW6C.js";import"./Dialog-sWeXwNNr.js";import"./cross-wBV-Qz69.js";import"./svgIconContainer-C7yUgkWe.js";import"./useBaseUiId-uat7AM1o.js";import"./InternalBackdrop-CzcksTqB.js";import"./composite-wjt4XLHj.js";import"./index-BjYlodOL.js";import"./index-DbpuMeeP.js";import"./index-C70dk2Pf.js";import"./useEventCallback-B_ko9UJi.js";import"./SkeletonBar-CtkMryCw.js";import"./LoadingCell-DUS-9_f_.js";import"./ColumnConfigDialog-B24LGm76.js";import"./DraggableList-BkuIleRX.js";import"./search-Cs7dO1R3.js";import"./Input-DgqlI36T.js";import"./useControlled-Dzpgg9G4.js";import"./Button-GV0a0tCT.js";import"./small-cross-SMAuoYrx.js";import"./ActionButton-DOmmgWg5.js";import"./Checkbox-BwgRj8PA.js";import"./useValueChanged-C7klXfZS.js";import"./CollapsiblePanel-BKL2IXwk.js";import"./MultiColumnSortDialog-CKYKNCyG.js";import"./MenuTrigger-DU7skQGD.js";import"./CompositeItem-CwRzyQgC.js";import"./ToolbarRootContext-Dnh-d6oH.js";import"./getDisabledMountTransitionStyles-Dl9xKsbw.js";import"./getPseudoElementBounds-CQCChVBu.js";import"./chevron-down-j_R9vXIX.js";import"./index-CQ29xKcD.js";import"./error-BsU_wzAp.js";import"./BaseCbacBanner-BRAkof2I.js";import"./makeExternalStore-CDdf-Cz-.js";import"./Tooltip-DpHICHzA.js";import"./isObject-CdQNKQKv.js";import"./debounce-DeIoYJsa.js";import"./tick-csDNEheu.js";import"./DropdownField-Cz1Kwyi1.js";import"./isEqual-C9uj5OR1.js";import"./_baseIsEqual-BR0JMNW1.js";import"./withOsdkMetrics-A7PvRLF9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
