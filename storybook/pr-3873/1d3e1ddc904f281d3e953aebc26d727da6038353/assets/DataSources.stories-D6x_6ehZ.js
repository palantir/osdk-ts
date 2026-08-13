import{j as r}from"./iframe-ClFIQ8KG.js";import{O as b}from"./object-table-CIZ5wxZ_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-4roW3n8W.js";import{u as g}from"./useOsdkClient-De0OgZae.js";import"./preload-helper-D-QzYjnt.js";import"./Table-DF1MSg5O.js";import"./index-CIPksERX.js";import"./Dialog-yohvHLrw.js";import"./cross-CzpL54rX.js";import"./svgIconContainer-BSoQXT4y.js";import"./useBaseUiId-CGYdOYHy.js";import"./InternalBackdrop-BYN0uwLY.js";import"./composite-CYuFvp7L.js";import"./index-D6fn_S1P.js";import"./index-CcH0wkbM.js";import"./index-C0bHrIL5.js";import"./useEventCallback-2FGON6Li.js";import"./SkeletonBar-BAxUsBjZ.js";import"./LoadingCell-CEEtcSs1.js";import"./ColumnConfigDialog-CNRH47Jy.js";import"./DraggableList-DpIRvCOG.js";import"./search-D9qR5ESv.js";import"./Input-DZLAYudG.js";import"./useControlled-DqI9i7cj.js";import"./Button-BMUicVal.js";import"./small-cross-CHjwGZnC.js";import"./ActionButton-DgvUkhlE.js";import"./Checkbox-DBPzyNV6.js";import"./useValueChanged-BfGI94ie.js";import"./CollapsiblePanel-BTYlq_dL.js";import"./MultiColumnSortDialog-O0VEBzdK.js";import"./MenuTrigger-Biet3JvN.js";import"./CompositeItem-Gl89whZy.js";import"./ToolbarRootContext-BD2PZEZ6.js";import"./getDisabledMountTransitionStyles-BON87G2B.js";import"./getPseudoElementBounds-CQu9cawX.js";import"./chevron-down-DJiIS0J4.js";import"./index-CRZWfRoV.js";import"./error-CA8gNZpF.js";import"./BaseCbacBanner-BQ99i8Jn.js";import"./makeExternalStore-CxxiTsbi.js";import"./Tooltip-C64qdZ5m.js";import"./PopoverPopup-BRxfVKHt.js";import"./debounce-CMubfxww.js";import"./tick-CveYwUx1.js";import"./DropdownField-O8-KkkYD.js";import"./isEqual-DsEEZELG.js";import"./withOsdkMetrics-of3GBGS8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
