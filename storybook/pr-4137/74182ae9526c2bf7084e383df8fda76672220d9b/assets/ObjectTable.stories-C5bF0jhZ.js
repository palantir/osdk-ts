import{j as i}from"./iframe-UiMnRuuf.js";import{O as p}from"./object-table-BQ_pa8qJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ZOuxOnxc.js";import"./preload-helper-D9-KtqjS.js";import"./Table-CdT3G1Lh.js";import"./index-0Ixo6srr.js";import"./Dialog-CKhxJa7-.js";import"./cross-CN0okcjD.js";import"./svgIconContainer-Dm9tYT__.js";import"./useBaseUiId-BENer-r-.js";import"./InternalBackdrop-ETQR7T-n.js";import"./composite-jFy9GvzG.js";import"./index-e-D0c2mh.js";import"./index-DBgZ08g1.js";import"./index-DEITom6T.js";import"./useEventCallback-DXT4fJhK.js";import"./SkeletonBar-Dd8DJhB7.js";import"./LoadingCell-BIgqx3WX.js";import"./ColumnConfigDialog-CieizKEU.js";import"./DraggableList-qRNMWLPj.js";import"./search-Cp4CoIwR.js";import"./Input-CNfnK_9k.js";import"./useControlled-BRDQspVd.js";import"./Button-rRx38Mfg.js";import"./small-cross-R5-Dp5lp.js";import"./ActionButton-DuhhsnPX.js";import"./Checkbox-CY25dkni.js";import"./useValueChanged-DyztBfxc.js";import"./CollapsiblePanel-DFbxjutV.js";import"./MultiColumnSortDialog-B9ctl80s.js";import"./MenuTrigger-7RpD5ZTh.js";import"./CompositeItem-BAINckPf.js";import"./ToolbarRootContext-B5RqdBSK.js";import"./getDisabledMountTransitionStyles-D8Fbf3VT.js";import"./getPseudoElementBounds-DbDKue2D.js";import"./chevron-down-CpxF8NNT.js";import"./index-DHTqVbcd.js";import"./error-Cy2KrzuU.js";import"./BaseCbacBanner-D7i1GiXc.js";import"./makeExternalStore-pWUg2aV2.js";import"./Tooltip-Ci9SwqoQ.js";import"./PopoverPopup-BQIehYyb.js";import"./debounce-CO81sG8W.js";import"./useOsdkClient-BHPGD1cz.js";import"./tick-Cm7cC8fk.js";import"./DropdownField-CWywt0Av.js";import"./isEqual-Chza7bno.js";import"./withOsdkMetrics-D6UjXomb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
