import{j as i}from"./iframe-D7WyLq_R.js";import{O as p}from"./object-table-jRD1_Lko.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BlRc5tbD.js";import"./preload-helper-BqfBxCjy.js";import"./Table-BamzqaoI.js";import"./index-HyeIDcrc.js";import"./Dialog-Ccerh4bb.js";import"./cross-uvcs2Wcl.js";import"./svgIconContainer-B4x4BdHn.js";import"./useBaseUiId-CG-SGXYP.js";import"./InternalBackdrop-7rlgucId.js";import"./composite-D_DTOoGQ.js";import"./index-ufR6xdAx.js";import"./index-D2fZUIcR.js";import"./index-eSq-wOtL.js";import"./useEventCallback-BReO6q8q.js";import"./SkeletonBar-Be2VldqA.js";import"./LoadingCell-BsVuTR_T.js";import"./ColumnConfigDialog-Q7laFexQ.js";import"./DraggableList-Cay8cu3c.js";import"./search-s_J2wlUd.js";import"./Input-C4gz0NfF.js";import"./useControlled-Bb8KRWad.js";import"./Button-BE_yPzwR.js";import"./small-cross-B4qCwIBh.js";import"./ActionButton-BuFs1EiV.js";import"./Checkbox-DcJs6uB9.js";import"./useValueChanged-BSHUSrlL.js";import"./CollapsiblePanel-H-RuyrJq.js";import"./MultiColumnSortDialog-4e12ji_e.js";import"./MenuTrigger-Ca94hyEY.js";import"./CompositeItem-ZpmtOb_M.js";import"./ToolbarRootContext-Fnt7cK66.js";import"./getDisabledMountTransitionStyles-DFqI_LNP.js";import"./getPseudoElementBounds-OQu2StyZ.js";import"./chevron-down-CUo9ik68.js";import"./index-CJGKKiqL.js";import"./error-D2VV45CC.js";import"./BaseCbacBanner-D9RQiU4n.js";import"./makeExternalStore-DcukOp_j.js";import"./Tooltip-ColuuQlO.js";import"./isObject-CDlc3nuf.js";import"./debounce-CJeHPCAd.js";import"./useOsdkClient-Ci5CHzsk.js";import"./tick-Dc3ISC5j.js";import"./DropdownField-BcUtsHzO.js";import"./isEqual-Cog-R91C.js";import"./_baseIsEqual-DcLozDln.js";import"./withOsdkMetrics-BvKbLnrg.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
