import{j as i}from"./iframe-C4MIlXUU.js";import{O as p}from"./object-table-DDycTUTt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-wgD43c57.js";import"./preload-helper-DCfOkHUu.js";import"./Table-jh-sNjmf.js";import"./index-QdXGOJ9B.js";import"./Dialog-BPEWuES9.js";import"./cross-D03lplef.js";import"./svgIconContainer-DoAfVxUT.js";import"./useBaseUiId-BLYxIIxg.js";import"./InternalBackdrop-C98GTYMM.js";import"./composite-7GWV62aV.js";import"./index-fTGPOK7q.js";import"./index-DDMEfKUV.js";import"./index-Cltx_TvU.js";import"./useEventCallback-A9aazwfG.js";import"./SkeletonBar-DZ93h05E.js";import"./LoadingCell-Cco5s7MI.js";import"./ColumnConfigDialog-BSg8I-6I.js";import"./DraggableList-lWiaBS2q.js";import"./search-Bbx7uHY2.js";import"./Input-u7GRO9F9.js";import"./useControlled-DaM2GsbY.js";import"./Button-BxGZ6LLp.js";import"./small-cross-CI-bZQTO.js";import"./ActionButton-DY1T25ma.js";import"./Checkbox-CheOw8Pz.js";import"./useValueChanged-C4rXhlJi.js";import"./CollapsiblePanel-DHh5X-RV.js";import"./MultiColumnSortDialog-Nov7WwuB.js";import"./MenuTrigger-D0TRSJ66.js";import"./CompositeItem-C-l5BZdt.js";import"./ToolbarRootContext-DtcwdZup.js";import"./getDisabledMountTransitionStyles-BIGg12Vn.js";import"./getPseudoElementBounds-Bg5q8lr3.js";import"./chevron-down-DQjtaLz5.js";import"./index-BpG7TDWh.js";import"./error-m5JvGXlH.js";import"./BaseCbacBanner-BGFoGpfs.js";import"./makeExternalStore-D8FJMeEh.js";import"./Tooltip-hAryQfwI.js";import"./PopoverPopup-BqUvpiAJ.js";import"./debounce-NhhwNg05.js";import"./useOsdkClient-BdpGzgo-.js";import"./tick-Be-lb4_a.js";import"./DropdownField-iPMHZz0u.js";import"./isEqual-ncJ8uLoB.js";import"./withOsdkMetrics-P9SsSnz2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
