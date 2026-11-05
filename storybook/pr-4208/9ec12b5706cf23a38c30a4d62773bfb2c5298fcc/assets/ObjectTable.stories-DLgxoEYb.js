import{j as i}from"./iframe-RocwcLA1.js";import{O as p}from"./object-table-BrowN1D4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D5uQYOhy.js";import"./preload-helper-Bi11_lQh.js";import"./Table-BeLYz7uY.js";import"./index-CPYhK6Tm.js";import"./Dialog-CuZ5OQb1.js";import"./cross-BgyJlmiP.js";import"./svgIconContainer-DLWtp0BU.js";import"./useBaseUiId-CBnRLDYk.js";import"./InternalBackdrop-DmC9pE0x.js";import"./composite-CcO-1qH0.js";import"./index-BnYAAGls.js";import"./index-CYrtNoCb.js";import"./index-CqKREmsT.js";import"./useEventCallback-CTQI-oGY.js";import"./SkeletonBar-DsYTpZqP.js";import"./LoadingCell-ObbDg5k5.js";import"./ColumnConfigDialog-B_Lr4FBf.js";import"./DraggableList-Ddkm9W7N.js";import"./search-vjT1hCHx.js";import"./Input-CcAG7gXy.js";import"./useControlled-Bbowgw5B.js";import"./Button-BNn-NlyQ.js";import"./small-cross-Dl_P2df6.js";import"./ActionButton-BCQKfrqp.js";import"./Checkbox-Ck2XR2UN.js";import"./useValueChanged-BedL59h3.js";import"./CollapsiblePanel-CmwuXWb4.js";import"./MultiColumnSortDialog-DLBjnobr.js";import"./MenuTrigger-CkSTpP0b.js";import"./CompositeItem-CRCvuWR7.js";import"./ToolbarRootContext-Cn6bmXqK.js";import"./getDisabledMountTransitionStyles-Cz_F6_AI.js";import"./getPseudoElementBounds-Dgc6Xv0e.js";import"./chevron-down-C7FnpsrF.js";import"./index-DmXTiMr0.js";import"./error-DACjt9aW.js";import"./BaseCbacBanner-DURaiKed.js";import"./makeExternalStore-B-sos_Fc.js";import"./Tooltip-CaSy6w0D.js";import"./PopoverPopup-CewEisyu.js";import"./debounce-V1uFoEkK.js";import"./useOsdkClient-6Q8tx1W_.js";import"./tick-ZxNKxEMa.js";import"./DropdownField-i887lUmw.js";import"./isEqual-DMqshNMZ.js";import"./withOsdkMetrics-D9G4bz54.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
