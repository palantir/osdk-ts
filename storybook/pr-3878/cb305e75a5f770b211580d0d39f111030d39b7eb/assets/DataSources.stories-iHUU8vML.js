import{j as r}from"./iframe-BXJnohbt.js";import{O as b}from"./object-table-D9NNs3hA.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DM2WuzT5.js";import{u as g}from"./useOsdkClient-y2bMalZp.js";import"./preload-helper-tvnGn4jg.js";import"./Table-B97BNwPW.js";import"./index-DJBlipGi.js";import"./Dialog-DAvTCL__.js";import"./cross-Q-_g4ZFQ.js";import"./svgIconContainer-VhJmqTox.js";import"./useBaseUiId-sZ35m2bM.js";import"./InternalBackdrop-vup632p4.js";import"./composite-DdNHLfsp.js";import"./index-DbER6lkg.js";import"./index-DIxniVKs.js";import"./index-BIEsfLi4.js";import"./useEventCallback-BvLSkLRP.js";import"./SkeletonBar-CDbdkFM2.js";import"./LoadingCell-U45hAs7y.js";import"./ColumnConfigDialog-e9SzTM1d.js";import"./DraggableList-yq3PZM49.js";import"./search-Bwx9I6xK.js";import"./Input-DFgR57Ky.js";import"./useControlled--cyQ52Ku.js";import"./Button-k1fX7wnM.js";import"./small-cross-3Wkanwed.js";import"./ActionButton-91Oje2JU.js";import"./Checkbox-DOv66HYU.js";import"./useValueChanged-CXlUDxOW.js";import"./CollapsiblePanel-C0Dtz8qp.js";import"./MultiColumnSortDialog-BhWeALjl.js";import"./MenuTrigger-Ci0xiN-V.js";import"./CompositeItem-DxHmEQaB.js";import"./ToolbarRootContext-DWK2aFvr.js";import"./getDisabledMountTransitionStyles-DbKz3mGY.js";import"./getPseudoElementBounds-CjzqAflM.js";import"./chevron-down-CyQUuZQm.js";import"./index-DCSxP7tL.js";import"./error-Du-8Vb6N.js";import"./BaseCbacBanner-yQghixcO.js";import"./makeExternalStore-Nh0J-rEN.js";import"./Tooltip-fNhv7nQW.js";import"./PopoverPopup-DzsPnqhc.js";import"./debounce-DTy8dIIZ.js";import"./tick-1_WHGxzZ.js";import"./DropdownField--OTUJ18G.js";import"./isEqual-CsfWQL0f.js";import"./withOsdkMetrics-DBlk2yrx.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
