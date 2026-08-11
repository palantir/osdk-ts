import{j as r}from"./iframe-DYVamJ0c.js";import{O as b}from"./object-table-DblF4JDE.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cz9i_cXF.js";import{u as g}from"./useOsdkClient-DZnVKV7U.js";import"./preload-helper-BKQhuHFM.js";import"./Table-DP--Ko5L.js";import"./index-DDVzKPeS.js";import"./Dialog-BdGRGrER.js";import"./cross-ZvvnBvAW.js";import"./svgIconContainer-DDKAKQ5N.js";import"./useBaseUiId-Dp5szWtR.js";import"./InternalBackdrop-Y7EEmORf.js";import"./composite-DvVYIwpT.js";import"./index-CS_faMAq.js";import"./index-4i5nJL9N.js";import"./index-D6PjjnI1.js";import"./useEventCallback-It5AU2GK.js";import"./SkeletonBar-U_6zsVeg.js";import"./LoadingCell-B68td28d.js";import"./ColumnConfigDialog-DjgJXpSK.js";import"./DraggableList-Dzg79a4e.js";import"./search-CNj8TXQm.js";import"./Input-BJ9fIVV-.js";import"./useControlled-rbncU9dQ.js";import"./isEqual-D9FM6jV5.js";import"./isObject-CWjh4YEm.js";import"./Button-B0mGoHRN.js";import"./ActionButton--6p0rxTX.js";import"./Checkbox-qhAqN2iD.js";import"./useValueChanged-BLJdW2rA.js";import"./CollapsiblePanel-CwNM9_AI.js";import"./MultiColumnSortDialog-BR-X1BMR.js";import"./MenuTrigger-B11uQSdh.js";import"./CompositeItem-BBaNk5MK.js";import"./ToolbarRootContext-1-HwXect.js";import"./getDisabledMountTransitionStyles-B41_0Tyr.js";import"./getPseudoElementBounds-BnEX3Sqz.js";import"./chevron-down-CDvyxAm0.js";import"./index-ClMUYth_.js";import"./error-BsbpZONe.js";import"./BaseCbacBanner-BqnpFmEE.js";import"./makeExternalStore-Ci8gWGJ6.js";import"./Tooltip-RCvIwlHR.js";import"./PopoverPopup-jsI3MN-h.js";import"./toNumber-58R2wJ1m.js";import"./tick-D-N2RUy5.js";import"./DropdownField-5xkyWwwi.js";import"./withOsdkMetrics-DIqDKAks.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
