import{j as i}from"./iframe-TTTmSYHm.js";import{O as p}from"./object-table-Br4ipIAQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DrB90i_g.js";import"./preload-helper-ClYOkReB.js";import"./Table-B2Fm57Ri.js";import"./index-MsEGuD0o.js";import"./Dialog-DELJOsWQ.js";import"./cross-DqugLD6r.js";import"./svgIconContainer-DU6hcGdL.js";import"./useBaseUiId-DzbI9-Sb.js";import"./InternalBackdrop-mImnYcgQ.js";import"./composite-BPJ0g_Cp.js";import"./index-CF7SEcu1.js";import"./index-Cqp_2UpH.js";import"./index-B9nxHhHn.js";import"./useEventCallback-BjYhRPw3.js";import"./SkeletonBar-Bu7s4m6h.js";import"./LoadingCell-BHnTaYLh.js";import"./ColumnConfigDialog-BL2ky_X9.js";import"./DraggableList-BdnVzN0F.js";import"./search-CpIo6FKV.js";import"./Input-B2lkln1U.js";import"./useControlled-bG7LsTar.js";import"./Button-D_Pqa9bY.js";import"./small-cross-CNQD1rAJ.js";import"./ActionButton-kMMiGbeY.js";import"./Checkbox-Bl7Mxayg.js";import"./useValueChanged-BXWrU09i.js";import"./CollapsiblePanel-ExecBSLk.js";import"./MultiColumnSortDialog--EIsLxx4.js";import"./MenuTrigger-BKoeXidj.js";import"./CompositeItem-DOKaGOjC.js";import"./ToolbarRootContext-Da-vX-iu.js";import"./getDisabledMountTransitionStyles-DvLD3XZY.js";import"./getPseudoElementBounds-C3b80VkD.js";import"./chevron-down-BWZ8_fkX.js";import"./index-DKumu57d.js";import"./error-BU0mbQfC.js";import"./BaseCbacBanner-Ct-Zyv71.js";import"./makeExternalStore-BiPnQfDm.js";import"./Tooltip-Dz8LBLaM.js";import"./PopoverPopup-Ezl5Gloz.js";import"./debounce-COnGppqi.js";import"./useOsdkClient-ATs7aeG_.js";import"./tick-F9zQ07Eh.js";import"./DropdownField-Cmj70H5z.js";import"./isEqual-YNXKjBKf.js";import"./withOsdkMetrics-C1xKtNKq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
