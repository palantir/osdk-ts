import{j as r}from"./iframe-CBrZfziz.js";import{O as b}from"./object-table-DgpN12v3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B4of6tsG.js";import{u as g}from"./useOsdkClient-SkJ9fsFZ.js";import"./preload-helper-C1Z52epK.js";import"./Table-BY3aOI22.js";import"./index-Cg9PAsxv.js";import"./Dialog-BcMlSlrF.js";import"./cross-CUjJ-5wv.js";import"./svgIconContainer-Dyb3dMVr.js";import"./useBaseUiId-rohArgKw.js";import"./InternalBackdrop-V0CkF19D.js";import"./composite-DsbP76iG.js";import"./index-BelcqY8o.js";import"./index-1iEJy2Ov.js";import"./index-Bae-mW45.js";import"./useEventCallback-BuEcwQ1V.js";import"./SkeletonBar-DUf6Dhh7.js";import"./LoadingCell-BihYYLTD.js";import"./ColumnConfigDialog-CqdmK7O6.js";import"./DraggableList-x3hT5q1h.js";import"./search-D5OSZ-8x.js";import"./Input-Z9Dcl-3O.js";import"./useControlled-DGjbGIEp.js";import"./Button-C6PfnoAg.js";import"./small-cross-BgphLRoU.js";import"./ActionButton-B64bWJbY.js";import"./Checkbox-DBzE_Cg7.js";import"./useValueChanged-BZvjAs-H.js";import"./CollapsiblePanel-CYyA9miJ.js";import"./MultiColumnSortDialog-CBJDppMh.js";import"./MenuTrigger-BJKTh4zN.js";import"./CompositeItem-BfobZyII.js";import"./ToolbarRootContext-P5RW03dk.js";import"./getDisabledMountTransitionStyles-BBlvU2B3.js";import"./getPseudoElementBounds-BnGi5c6o.js";import"./chevron-down-DSLPvc9w.js";import"./index-TRV83l-e.js";import"./error-B-tgnml8.js";import"./BaseCbacBanner-BMjyNEmC.js";import"./makeExternalStore-B8Ya0P1z.js";import"./Tooltip-Cyp7zXRj.js";import"./PopoverPopup-BeaN5rrP.js";import"./debounce-Byylbass.js";import"./tick-Do95XvNo.js";import"./DropdownField-7P6q9HW6.js";import"./isEqual-CqekdwE9.js";import"./withOsdkMetrics-CdS06qS5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
