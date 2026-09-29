import{j as i}from"./iframe-BDrYxAnj.js";import{O as p}from"./object-table-BBe01rOp.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B1M6SyX-.js";import"./preload-helper-BbEpp3I7.js";import"./Table-D-vzxeIM.js";import"./index-BPEebEts.js";import"./Dialog-DPBerO6L.js";import"./cross-DN7w6x3L.js";import"./svgIconContainer-Ds5xgQa8.js";import"./useBaseUiId-CAXuqLAY.js";import"./InternalBackdrop-DWYHvnmi.js";import"./composite-DYyfkGU2.js";import"./index-BrKxc1O3.js";import"./index-7qmIIDvp.js";import"./index-CGlFVnJg.js";import"./useEventCallback-dV43fwqZ.js";import"./SkeletonBar-3MDKkZoz.js";import"./LoadingCell-CwbuJPcu.js";import"./ColumnConfigDialog-BTONJoiK.js";import"./DraggableList-CmS4ByL1.js";import"./search-bZxTGR19.js";import"./Input-C01z3l8s.js";import"./useControlled-BxTCkN_B.js";import"./Button-BXNKdTW4.js";import"./small-cross-BCuonOce.js";import"./ActionButton-Dt_BEibG.js";import"./Checkbox-Gd7yqC4V.js";import"./useValueChanged-BIKs48bW.js";import"./CollapsiblePanel-CSDsM7aL.js";import"./MultiColumnSortDialog-qJwWzLXC.js";import"./MenuTrigger-CWq-RERI.js";import"./CompositeItem-Bmk8s39S.js";import"./ToolbarRootContext-GKsQXXvO.js";import"./getDisabledMountTransitionStyles-CpLEVLsZ.js";import"./getPseudoElementBounds-BKXXIJ8q.js";import"./chevron-down-DSLDVHXx.js";import"./index-5OHDQhQD.js";import"./error-Bic94l6Q.js";import"./BaseCbacBanner-DIZLSVF8.js";import"./makeExternalStore-BknbLg4s.js";import"./Tooltip-F1ZDXICZ.js";import"./PopoverPopup-Du5q3SlO.js";import"./debounce-BunXjI-p.js";import"./useOsdkClient-BlyxCpjB.js";import"./tick-BobOfkxj.js";import"./DropdownField-c9rafbuP.js";import"./isEqual-DhVMvS_4.js";import"./withOsdkMetrics-O05I0Pm6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
