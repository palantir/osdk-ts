import{j as r}from"./iframe-Chf_oTGA.js";import{O as b}from"./object-table-DfZxQv0Z.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-1EhuABCJ.js";import{u as g}from"./useOsdkClient-VQg3IU_U.js";import"./preload-helper-CDTIXXks.js";import"./Table-A1ezYdFI.js";import"./index-xJnBoHwJ.js";import"./Dialog-BcgX0pie.js";import"./cross-CrnBFQH-.js";import"./svgIconContainer-BH22RWVr.js";import"./useBaseUiId-hHX-f39p.js";import"./InternalBackdrop-CwX4t6qu.js";import"./composite-BoSTtwUc.js";import"./index-CxjHweEz.js";import"./index-BtccUsyA.js";import"./index-CWVms5Tp.js";import"./useEventCallback-BRqteG3d.js";import"./SkeletonBar-Djz_uQ63.js";import"./LoadingCell-6VEM_Qe8.js";import"./ColumnConfigDialog-CGaIoYIj.js";import"./DraggableList-IqnZskH8.js";import"./search-ygVixVNd.js";import"./Input-BFq9F5ks.js";import"./useControlled-VvgXxcWd.js";import"./isEqual-D1Q6ZEcL.js";import"./isObject--uK95e87.js";import"./Button-DKdaKz-_.js";import"./ActionButton-B0Pm9-CH.js";import"./Checkbox-Csz8M_77.js";import"./useValueChanged-BklgFBNq.js";import"./CollapsiblePanel-CUBqE99N.js";import"./MultiColumnSortDialog-xah2tayR.js";import"./MenuTrigger-BsfExqdA.js";import"./CompositeItem-C_RDCmWm.js";import"./ToolbarRootContext-GVFBeBA6.js";import"./getDisabledMountTransitionStyles-VZ9bw_0R.js";import"./getPseudoElementBounds-BkgIVNoQ.js";import"./chevron-down-BETM3MrF.js";import"./index-CMwyLjyb.js";import"./error-DgN3iPqH.js";import"./BaseCbacBanner-vCizbw2T.js";import"./makeExternalStore-BetVxvym.js";import"./Tooltip-C5E6djBP.js";import"./PopoverPopup-Crk7RKNj.js";import"./toNumber-aBr24n79.js";import"./tick-6ldMfmE5.js";import"./DropdownField-BdLbEKPf.js";import"./withOsdkMetrics-C4p6K-5h.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
