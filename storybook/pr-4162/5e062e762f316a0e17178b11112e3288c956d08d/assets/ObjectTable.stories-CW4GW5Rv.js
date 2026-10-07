import{j as i}from"./iframe-Cidbd9U_.js";import{O as p}from"./object-table-DOYUvVE2.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-XP5oSCNf.js";import"./preload-helper-CDZ9ml3u.js";import"./Table-Cm9n3Fcz.js";import"./index-DHtVl5lr.js";import"./Dialog-Cc422kNb.js";import"./cross-BTGq5cWg.js";import"./svgIconContainer-BRrBCQQQ.js";import"./useBaseUiId-qBbflN1T.js";import"./InternalBackdrop-CRTpZ3Mc.js";import"./composite-wQgj7E4E.js";import"./index-CvuA1U9Q.js";import"./index-B4TXSL8y.js";import"./index-ZSi5hxUD.js";import"./useEventCallback-CO_HzDJy.js";import"./SkeletonBar-DL5xvDTN.js";import"./LoadingCell-BXhBEBYw.js";import"./ColumnConfigDialog-O6Wlhrjg.js";import"./DraggableList-CZhlEIQW.js";import"./search-d8u8t1Cm.js";import"./Input-DOViwQP-.js";import"./useControlled-CD8kHrNC.js";import"./Button-B5k9EJ-k.js";import"./small-cross-DlRvHu10.js";import"./ActionButton-CipDVnp9.js";import"./Checkbox-BD3PmDNr.js";import"./useValueChanged-DYHqJuk7.js";import"./CollapsiblePanel-CDei_9JY.js";import"./MultiColumnSortDialog-MAcg3lHH.js";import"./MenuTrigger-DZEXzv0N.js";import"./CompositeItem-RBkj06fN.js";import"./ToolbarRootContext-CFGHeG8t.js";import"./getDisabledMountTransitionStyles-DeD1w0n_.js";import"./getPseudoElementBounds-BvCzK4YA.js";import"./chevron-down-gf2GhVLl.js";import"./index-CSBG_Ogr.js";import"./error-CLTZOyUS.js";import"./BaseCbacBanner-BadiuEUJ.js";import"./makeExternalStore-Cw6sOONN.js";import"./Tooltip-DjjgX0Td.js";import"./PopoverPopup-Bs69cHyF.js";import"./debounce-DvHpY4Ou.js";import"./useOsdkClient-BgKg3-oj.js";import"./tick-C2hQsqLU.js";import"./DropdownField-DiOH_8ae.js";import"./isEqual-L9bITeX8.js";import"./withOsdkMetrics-CFH71nhb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
