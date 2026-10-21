import{j as i}from"./iframe-Crrq_V9a.js";import{O as p}from"./object-table-B8hROw69.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BvemTEu-.js";import"./preload-helper-B0KSNMSf.js";import"./Table-C-XUy--Q.js";import"./index-BUK6uge5.js";import"./Dialog-DtUfF62j.js";import"./cross-BfUth1rr.js";import"./svgIconContainer-CBsIZ9u2.js";import"./useBaseUiId-G0RhfiSE.js";import"./InternalBackdrop-Cb-39vNM.js";import"./composite-DFN7AbeA.js";import"./index-LdB11F_t.js";import"./index-BhOk5BKE.js";import"./index-dPrJwc88.js";import"./useEventCallback-DZL9KXuR.js";import"./SkeletonBar-B0oezpwK.js";import"./LoadingCell-47RrJ7Ze.js";import"./ColumnConfigDialog-wR9Noxr_.js";import"./DraggableList-BKs_pyIm.js";import"./search-UIxXkiNx.js";import"./Input-BB-wuDqG.js";import"./useControlled-7_WCnHC_.js";import"./Button-rjMzAizh.js";import"./small-cross-2Itdgd_Q.js";import"./ActionButton-B7zHu77T.js";import"./Checkbox-D8a0dNg0.js";import"./useValueChanged-Mq4YQWWw.js";import"./CollapsiblePanel-DMABQszi.js";import"./MultiColumnSortDialog-D0s8qdtH.js";import"./MenuTrigger-rBTOT85u.js";import"./CompositeItem-COkq6uGE.js";import"./ToolbarRootContext-UM565H_l.js";import"./getDisabledMountTransitionStyles-DsVgkYmN.js";import"./getPseudoElementBounds-BJj-LpqP.js";import"./chevron-down-33yPdK7L.js";import"./index-iPpy1sZ4.js";import"./error-FZelDdZI.js";import"./BaseCbacBanner-BWeKp-nV.js";import"./makeExternalStore-DqEHGNcf.js";import"./Tooltip-CmGtxQmE.js";import"./PopoverPopup-CBuM0R4V.js";import"./debounce-BqrQQHrt.js";import"./useOsdkClient-CQzSF8cZ.js";import"./tick-C-BN17pt.js";import"./DropdownField-CvoKEn-m.js";import"./isEqual-BdNG0-Zn.js";import"./withOsdkMetrics-BUiVXfiJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
