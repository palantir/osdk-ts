import{j as i}from"./iframe-D6fPZnqe.js";import{O as p}from"./object-table-BcOuIXmc.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CMgxSsGm.js";import"./preload-helper-CBKbTLo4.js";import"./Table-BlXSDbw9.js";import"./index-DhSFErPm.js";import"./Dialog-DOJWZ1NL.js";import"./cross-9F8JKEQy.js";import"./svgIconContainer-DubCep_u.js";import"./useBaseUiId-D4NDHa5t.js";import"./InternalBackdrop-C5Ye3Vqn.js";import"./composite-Be4p-4ws.js";import"./index-DAhymAav.js";import"./index-D-Gucmtt.js";import"./index-BewO9ECR.js";import"./useEventCallback-DEXHHYRn.js";import"./SkeletonBar-BsphNaN3.js";import"./LoadingCell-DpcTNjt7.js";import"./ColumnConfigDialog-CDyMzNiq.js";import"./DraggableList-Boy9Qx86.js";import"./search-j5vkqq1q.js";import"./Input-DoNUyN0C.js";import"./useControlled-iYay2yJT.js";import"./Button-BLxStAZZ.js";import"./small-cross-DR8DSWW3.js";import"./ActionButton-S2mIoAOj.js";import"./Checkbox-CXAqa0cU.js";import"./useValueChanged-1d_1m1_Q.js";import"./CollapsiblePanel-CxtE82_6.js";import"./MultiColumnSortDialog-eCNJ10dK.js";import"./MenuTrigger-C9Drb-bv.js";import"./CompositeItem--v0QRyqL.js";import"./ToolbarRootContext-DyAqKFWo.js";import"./getDisabledMountTransitionStyles-DV-WhxgY.js";import"./getPseudoElementBounds-DJZ8Mcmv.js";import"./chevron-down-ClCJem65.js";import"./index-CB6cfHnU.js";import"./error-1a5mXdNM.js";import"./BaseCbacBanner-CFtSOy4j.js";import"./makeExternalStore-DTY2ua9-.js";import"./Tooltip-CfEkDLj5.js";import"./PopoverPopup-Can2UDel.js";import"./debounce-BxsvKDso.js";import"./useOsdkClient-wl1q4R-Q.js";import"./tick-Cmu8hVd0.js";import"./DropdownField-DSKwjEDD.js";import"./isEqual-CZNfwh1Q.js";import"./withOsdkMetrics-IqNfL-7w.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
