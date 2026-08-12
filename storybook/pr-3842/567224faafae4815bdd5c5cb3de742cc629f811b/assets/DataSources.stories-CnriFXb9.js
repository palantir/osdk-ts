import{j as r}from"./iframe-CkxgfQeO.js";import{O as b}from"./object-table-CoR5juoc.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DhTCgiQ6.js";import{u as g}from"./useOsdkClient-D8Cawu22.js";import"./preload-helper-D5D19XNo.js";import"./Table-brYCPGGz.js";import"./index-IOPRRqhI.js";import"./Dialog-AECQsIBv.js";import"./cross-CH36hvQf.js";import"./svgIconContainer-BnddIgAA.js";import"./useBaseUiId-CoaLnFnK.js";import"./InternalBackdrop-CRqcgfb3.js";import"./composite-C9gQ7F0R.js";import"./index-CzQUlWmE.js";import"./index-BBrPyGlT.js";import"./index-COolpCRV.js";import"./useEventCallback-tNddHvUY.js";import"./SkeletonBar-yDZKm4eE.js";import"./LoadingCell-_jXEP0tP.js";import"./ColumnConfigDialog-KJWocYIu.js";import"./DraggableList-d77ZMIsB.js";import"./search-6LzY9pcR.js";import"./Input-CBK5xZA_.js";import"./useControlled-DB78SK-c.js";import"./isEqual-NN4sf9C3.js";import"./isObject-DbVGHmvG.js";import"./Button-DT56OzjG.js";import"./ActionButton-C6o3T8ok.js";import"./Checkbox-_MS3OdLx.js";import"./useValueChanged-DdUP-vnE.js";import"./CollapsiblePanel-Dl-C548X.js";import"./MultiColumnSortDialog-BYeNkeug.js";import"./MenuTrigger-lo2vMG6r.js";import"./CompositeItem-BTHTAMQz.js";import"./ToolbarRootContext-Cr1zYvXJ.js";import"./getDisabledMountTransitionStyles-B1AQ2GNq.js";import"./getPseudoElementBounds-CtK0BnJ-.js";import"./chevron-down-aLsddmml.js";import"./index-B9L6gED-.js";import"./error-DNZfmN7i.js";import"./BaseCbacBanner-C8q4nU5Z.js";import"./makeExternalStore-B9DKryZa.js";import"./Tooltip-C3tsi8xF.js";import"./PopoverPopup-D_wx_Xml.js";import"./toNumber-Dhle7t7R.js";import"./tick-BVRdIfgv.js";import"./DropdownField-b310lDZ5.js";import"./withOsdkMetrics-Zaf_KVW8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
