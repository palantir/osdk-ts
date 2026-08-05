import{j as r}from"./iframe-DjO1Y5KD.js";import{O as b}from"./object-table-BXEabZx_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ueYL3E1_.js";import{u as g}from"./useOsdkClient-2X6mK27g.js";import"./preload-helper-DHosF_Vr.js";import"./Table-CXPmdf4i.js";import"./index-Da8z7oEc.js";import"./Dialog-BvkiDU_U.js";import"./cross-tGA7XqzW.js";import"./svgIconContainer-D6HUiu07.js";import"./useBaseUiId-Cn6_ygUf.js";import"./InternalBackdrop-DC3S6jXh.js";import"./composite-Bd626ASs.js";import"./index-BUxTRb1k.js";import"./index-D93f91Ms.js";import"./index-Dw_Bxqsc.js";import"./useEventCallback-C7x6nWmr.js";import"./SkeletonBar-C-t-5D7v.js";import"./LoadingCell-I1lAaO0m.js";import"./ColumnConfigDialog-D0FmGrhU.js";import"./DraggableList-FCV6IGLZ.js";import"./search-1bd_RPWo.js";import"./Input-DiRNvOoy.js";import"./useControlled-ai9ga_yt.js";import"./isEqual-4uG8zWUg.js";import"./isObject-kNaBNgmh.js";import"./Button-BNxBvJnR.js";import"./ActionButton-BIZrEYUh.js";import"./Checkbox-W-lD-xoQ.js";import"./useValueChanged-KhncHdx6.js";import"./CollapsiblePanel-Dh7E4-x5.js";import"./MultiColumnSortDialog-CpFd9R_l.js";import"./MenuTrigger-OMzSeneh.js";import"./CompositeItem-CRMRF0tg.js";import"./ToolbarRootContext-B8x2s3ZI.js";import"./getDisabledMountTransitionStyles-BRX2szHm.js";import"./getPseudoElementBounds-BDK5ESci.js";import"./chevron-down-pR2fh_mT.js";import"./index-BFpVUcDF.js";import"./error-a7j3r22v.js";import"./BaseCbacBanner--QhyR6T3.js";import"./makeExternalStore-Cp0-nqWS.js";import"./Tooltip-BhgqSq7E.js";import"./PopoverPopup-26HR0rR7.js";import"./toNumber-sv9WmTId.js";import"./tick-CQ81Odyk.js";import"./DropdownField-BItJqzBd.js";import"./withOsdkMetrics-DNr9JQQP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
