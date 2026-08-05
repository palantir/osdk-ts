import{j as i}from"./iframe-CLumNID0.js";import{O as p}from"./object-table-DLcdYrfg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-UXFUV72m.js";import"./preload-helper-Dz-GKNZ3.js";import"./Table-BD70MMX1.js";import"./index-DKU1K2_w.js";import"./Dialog-C-vWojNb.js";import"./cross-D2EPxtxs.js";import"./svgIconContainer-CPoSZbgC.js";import"./useBaseUiId-Bh-y6B9l.js";import"./InternalBackdrop-BIVaWud6.js";import"./composite-BcZGRwv5.js";import"./index-CVKRWWtF.js";import"./index-BZx9EN2X.js";import"./index-CqEKhfCt.js";import"./useEventCallback-DmAk5Nvb.js";import"./SkeletonBar-Cg4i2Eky.js";import"./LoadingCell-pTieUBV_.js";import"./ColumnConfigDialog-CHH6dhJt.js";import"./DraggableList-Cht41XrX.js";import"./search-DLeM-Fzk.js";import"./Input-B4Ein_ID.js";import"./useControlled-CAmMAraC.js";import"./isEqual-DgAnO35B.js";import"./isObject-BQdnS6rT.js";import"./Button-CBLB_2Qn.js";import"./ActionButton-ubYiUC_C.js";import"./Checkbox-Bjs8_wlf.js";import"./useValueChanged-53h7i9dd.js";import"./CollapsiblePanel-B1lI3eRJ.js";import"./MultiColumnSortDialog-DXw6tgQ9.js";import"./MenuTrigger-NPeyU7rU.js";import"./CompositeItem-CO8dmy82.js";import"./ToolbarRootContext-ldJ0ppJC.js";import"./getDisabledMountTransitionStyles-cNfoKVbW.js";import"./getPseudoElementBounds-DiLLOldJ.js";import"./chevron-down-CS76UfJi.js";import"./index-cZ7ucSab.js";import"./error-DDoBRt2_.js";import"./BaseCbacBanner-BN-MpSnO.js";import"./makeExternalStore-CkYrcdla.js";import"./Tooltip-D54JRXPt.js";import"./PopoverPopup-iQufl1us.js";import"./toNumber-dmoB_w4W.js";import"./useOsdkClient-DETgLlTn.js";import"./tick-CZCe4N3w.js";import"./DropdownField-7ALzCTeZ.js";import"./withOsdkMetrics-jJjprDjm.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
