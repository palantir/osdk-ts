import{j as i}from"./iframe-DkjIhjOk.js";import{O as p}from"./object-table-DjhA7KTC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BM9e_0aA.js";import"./preload-helper-DUI5tsck.js";import"./Table-YRTYsQnk.js";import"./index-Ci1HsxQf.js";import"./Dialog-B-doa8PC.js";import"./cross-BOLu8mlC.js";import"./svgIconContainer-bvG5TW2Y.js";import"./useBaseUiId-Biend9O3.js";import"./InternalBackdrop-C_M3PWM9.js";import"./composite-DVDI3Vyc.js";import"./index-ey6hl2b8.js";import"./index--Nzol5yv.js";import"./index-C-30e07L.js";import"./useEventCallback-BcNnEe4O.js";import"./SkeletonBar-xPxJdYTs.js";import"./LoadingCell-RKWHNWRh.js";import"./ColumnConfigDialog-DcTSIA3i.js";import"./DraggableList-DelcAz5h.js";import"./search-BZ8v_096.js";import"./Input-D-eMrt1E.js";import"./useControlled-BTghw2bz.js";import"./Button-CwSvPgha.js";import"./small-cross-Bdoag7lD.js";import"./ActionButton-DnSGyXBp.js";import"./Checkbox-BUlFL2Ay.js";import"./useValueChanged-mGVslq15.js";import"./CollapsiblePanel-DeuzuEYY.js";import"./MultiColumnSortDialog-BW9H5Lbm.js";import"./MenuTrigger-JLOD6Cua.js";import"./CompositeItem-BNwAusbR.js";import"./ToolbarRootContext-6z2XExln.js";import"./getDisabledMountTransitionStyles-4RzuPJj6.js";import"./getPseudoElementBounds-Cjnm34tD.js";import"./chevron-down-DahpzRGw.js";import"./index-BSyqZrwB.js";import"./error-B5H2RzDH.js";import"./BaseCbacBanner-BRzJz9wR.js";import"./makeExternalStore-DV2VnHUE.js";import"./Tooltip-A5u3Ouiv.js";import"./PopoverPopup-D3VoNSFI.js";import"./debounce-JLt9Gzvl.js";import"./useOsdkClient-CXgoPmaj.js";import"./tick-PgSwRzNQ.js";import"./DropdownField-BL_jj1eH.js";import"./isEqual-BroWPddn.js";import"./withOsdkMetrics-CFjDkd46.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
