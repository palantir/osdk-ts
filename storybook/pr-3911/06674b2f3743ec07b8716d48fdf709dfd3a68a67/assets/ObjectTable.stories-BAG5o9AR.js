import{j as i}from"./iframe-CDYdpxWh.js";import{O as p}from"./object-table-BjnWrH01.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BOWZxXNh.js";import"./preload-helper-CkE461ve.js";import"./Table-CjJV4sLf.js";import"./index-BDIxaxLo.js";import"./Dialog-BCMaIp31.js";import"./cross-oT0hm_vb.js";import"./svgIconContainer-CHuNpbq1.js";import"./useBaseUiId-CUhIEzim.js";import"./InternalBackdrop-B3fYgT8p.js";import"./composite-rscbUgln.js";import"./index-Dh4Ma2cK.js";import"./index-DTjfrKc-.js";import"./index-BCnZqWBV.js";import"./useEventCallback-b289-p9H.js";import"./SkeletonBar-yRXBaiBE.js";import"./LoadingCell-BtByd-IS.js";import"./ColumnConfigDialog-CxQXLoNC.js";import"./DraggableList-D1f34AP8.js";import"./search-DOJNPKi3.js";import"./Input-BmXHCQaU.js";import"./useControlled-BZuuCA_k.js";import"./Button-B9zOHmCX.js";import"./small-cross-BEQ-ib7U.js";import"./ActionButton-Ck63C7O6.js";import"./Checkbox-BEImIYGg.js";import"./useValueChanged-rfKvsQCF.js";import"./CollapsiblePanel-DeVfDs5X.js";import"./MultiColumnSortDialog-DiVuI_tD.js";import"./MenuTrigger-DD5GtTNj.js";import"./CompositeItem-BTvB014k.js";import"./ToolbarRootContext-Cua-jDew.js";import"./getDisabledMountTransitionStyles-jtYZ-5fr.js";import"./getPseudoElementBounds-DkrZo1x4.js";import"./chevron-down--F9l2MVX.js";import"./index-DTpaMTKB.js";import"./error-BRoJe7F1.js";import"./BaseCbacBanner-D_Iu1OFt.js";import"./makeExternalStore-BpabXzBh.js";import"./Tooltip-Bcibbl9B.js";import"./PopoverPopup-B3plVJqJ.js";import"./debounce-DDBUoCd_.js";import"./useOsdkClient-992L-qjf.js";import"./tick-DYCePGsU.js";import"./DropdownField-cy05WkxS.js";import"./isEqual-IO0SWj-x.js";import"./withOsdkMetrics-_ioV7svt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
