import{j as r}from"./iframe-56aCtkcZ.js";import{O as b}from"./object-table-DY9jOMSL.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BzdhKxqT.js";import{u as g}from"./useOsdkClient-jilUbAUE.js";import"./preload-helper-DP50sY1P.js";import"./Table-BD41Pu4l.js";import"./index-BM5nCcvA.js";import"./Dialog-C8sI_IUj.js";import"./cross-BkceNYXb.js";import"./svgIconContainer-Da40OoQe.js";import"./useBaseUiId-D82-BIAj.js";import"./InternalBackdrop-BWk9Mij_.js";import"./composite-Bol_PDWG.js";import"./index-WgXTqvYF.js";import"./index-2i5LUS2T.js";import"./index-6JhW2qtZ.js";import"./useEventCallback--SPa_rCD.js";import"./SkeletonBar-B6_sPXiY.js";import"./LoadingCell-9Bkob7fj.js";import"./ColumnConfigDialog-E8E7Cf-b.js";import"./DraggableList-BgkHsuk4.js";import"./search-Df5_6yBi.js";import"./Input-BUSfhI-b.js";import"./useControlled-BNAN5oeG.js";import"./Button-C0vE2bzb.js";import"./small-cross-BScMbdWS.js";import"./ActionButton-juMisa4o.js";import"./Checkbox-BQvICqoB.js";import"./useValueChanged-B9dcid5j.js";import"./CollapsiblePanel-BK9buE6t.js";import"./MultiColumnSortDialog-BHrG4DuP.js";import"./MenuTrigger-CYnmjXqd.js";import"./CompositeItem-CtIfORVC.js";import"./ToolbarRootContext-DWmT4M8t.js";import"./getDisabledMountTransitionStyles-C3g2m2GA.js";import"./getPseudoElementBounds-DhoqY1uL.js";import"./chevron-down--SGqA3gF.js";import"./index-BglOGw85.js";import"./error-t-pHJ0in.js";import"./BaseCbacBanner-FU9mX3LF.js";import"./makeExternalStore-C8LtB6Bq.js";import"./Tooltip-DPvc60vQ.js";import"./PopoverPopup-1nRwWEZN.js";import"./debounce-CmP_j_Q8.js";import"./tick-BVwIBB0x.js";import"./DropdownField-3Ad7m87u.js";import"./isEqual-CeyZKxlT.js";import"./withOsdkMetrics-BQAZKQ7x.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
