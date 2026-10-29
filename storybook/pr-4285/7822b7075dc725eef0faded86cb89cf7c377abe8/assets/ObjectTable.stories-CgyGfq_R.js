import{j as i}from"./iframe-CVDpL90O.js";import{O as p}from"./object-table-C4OyoEoQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CKrlPbRT.js";import"./preload-helper-CIPjJPKp.js";import"./Table-m3siUyni.js";import"./index-BF0HWBEB.js";import"./Dialog-Bbk56tVZ.js";import"./cross-vYjtUHUt.js";import"./svgIconContainer-XCs7jcMS.js";import"./useBaseUiId-BCC_HzQ6.js";import"./InternalBackdrop-BZZ5bQIp.js";import"./composite-lCZw7hw2.js";import"./index-Ds1Aymw0.js";import"./index-CULs0xL-.js";import"./index-Dtg66FsS.js";import"./useEventCallback-srOVomUh.js";import"./SkeletonBar-CqE5Ixfq.js";import"./LoadingCell-Vzzqg9Lm.js";import"./ColumnConfigDialog-EkF4Nkow.js";import"./DraggableList-CdbA5-07.js";import"./search-DRW19Kos.js";import"./Input-j-X_dej_.js";import"./useControlled-DZoipFBP.js";import"./Button-BH6PW13i.js";import"./small-cross-DZOaDD7A.js";import"./ActionButton-C7QU8r5M.js";import"./Checkbox-B5xiFf3B.js";import"./useValueChanged-DXsPmKg2.js";import"./CollapsiblePanel-Cp-hOTel.js";import"./MultiColumnSortDialog-Bmkk9Lni.js";import"./MenuTrigger-BK4NkiMG.js";import"./CompositeItem-Cv4L9909.js";import"./ToolbarRootContext-ibPgpNdZ.js";import"./getDisabledMountTransitionStyles-B9VELkTQ.js";import"./getPseudoElementBounds-Die0kok9.js";import"./chevron-down-h1ntsUGU.js";import"./index-DY-TprZd.js";import"./error-DF2Qy4tB.js";import"./BaseCbacBanner-DxmNGCYc.js";import"./makeExternalStore-fRsFu06A.js";import"./Tooltip-CqTiZ4gu.js";import"./PopoverPopup-D4SYJzOZ.js";import"./debounce-C-oR-6vV.js";import"./useOsdkClient-BiLmRsAv.js";import"./tick-BMFIqZXK.js";import"./DropdownField-BM5OcVuZ.js";import"./isEqual-BaPrlMHb.js";import"./withOsdkMetrics-Bl2KNckA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
