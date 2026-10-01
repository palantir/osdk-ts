import{j as r}from"./iframe-BiMzIlPJ.js";import{O as b}from"./object-table-CCv-_1_a.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D6ywk25a.js";import{u as g}from"./useOsdkClient-Il2EhGQ7.js";import"./preload-helper-dV0TeC0E.js";import"./Table-C1EvDWHO.js";import"./index-Dl3SZpx3.js";import"./Dialog-CUY8EJE8.js";import"./cross-BJNvpKNm.js";import"./svgIconContainer-CxWabZX-.js";import"./useBaseUiId-W_-oecTL.js";import"./InternalBackdrop-DhhF01_H.js";import"./composite-NMWOeRk3.js";import"./index-BipBLK98.js";import"./index-e-n3pUpE.js";import"./index-BOxfm3do.js";import"./useEventCallback-BZOG7Hba.js";import"./SkeletonBar-GDzcd7dh.js";import"./LoadingCell-Yb7MOHBb.js";import"./ColumnConfigDialog-BFHt28b8.js";import"./DraggableList-BzHFuVjE.js";import"./search-BuVLYo6z.js";import"./Input-Cn6g7mcN.js";import"./useControlled-545e9KB7.js";import"./Button-CQ2rKaZE.js";import"./small-cross-CcTfhdj4.js";import"./ActionButton-DphoRnh0.js";import"./Checkbox-BUA4g2ik.js";import"./useValueChanged-BmyiQTkB.js";import"./CollapsiblePanel-vr5w6FoC.js";import"./MultiColumnSortDialog-guC005qZ.js";import"./MenuTrigger-CoiXwjez.js";import"./CompositeItem-DZTQE9oi.js";import"./ToolbarRootContext-DLbFMlLJ.js";import"./getDisabledMountTransitionStyles-Co21QCNW.js";import"./getPseudoElementBounds-C_80eEsV.js";import"./chevron-down-Dj5P_Z4N.js";import"./index-Du_9BUOk.js";import"./error-BvyeXfc5.js";import"./BaseCbacBanner-BpqxrdVV.js";import"./makeExternalStore-C_oT62wU.js";import"./Tooltip-DCHj2uG-.js";import"./PopoverPopup-BAf_TSo2.js";import"./debounce-BQsIlRkA.js";import"./tick-Dv1m_Fkz.js";import"./DropdownField-CfGoTJuL.js";import"./isEqual-CScgGPRW.js";import"./withOsdkMetrics-D6MPIy_f.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
