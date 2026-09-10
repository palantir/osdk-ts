import{j as i}from"./iframe-0hzt8uI9.js";import{O as p}from"./object-table-4nECycnq.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DWhPL_6-.js";import"./preload-helper-DYpcx0vb.js";import"./Table-BaCI3wua.js";import"./index-B8ey7LBN.js";import"./Dialog-lTrFSQZA.js";import"./cross-DjAvUIeX.js";import"./svgIconContainer-DbVM6MQd.js";import"./useBaseUiId-Dq5-ot3p.js";import"./InternalBackdrop-BcHu6G-7.js";import"./composite-DM9rU2PJ.js";import"./index-Dz32LMbM.js";import"./index-B5xQNHde.js";import"./index-D6V2RAHr.js";import"./useEventCallback-BlRZj7C1.js";import"./SkeletonBar-gCCYUalJ.js";import"./LoadingCell-B0xJXtg-.js";import"./ColumnConfigDialog-BVJu8IbZ.js";import"./DraggableList-Bp8aKqyi.js";import"./search-DT_KCJGf.js";import"./Input-B6yL1HnH.js";import"./useControlled-CR71uT_f.js";import"./Button-xLAmrvCU.js";import"./small-cross-zefBxPtr.js";import"./ActionButton-B2lno6-g.js";import"./Checkbox-DD6kA_cd.js";import"./useValueChanged-CYfVIZzo.js";import"./CollapsiblePanel-BJYiJbwQ.js";import"./MultiColumnSortDialog-DCN_ZNGX.js";import"./MenuTrigger-SA4IIJ2u.js";import"./CompositeItem-B4wf29Ba.js";import"./ToolbarRootContext-DMiVgANq.js";import"./getDisabledMountTransitionStyles-CbRqGhyd.js";import"./getPseudoElementBounds-ChpkT6mB.js";import"./chevron-down-EB3ta9K0.js";import"./index-JO_mHdMF.js";import"./error-CvvhWrfu.js";import"./BaseCbacBanner-D4kcC1sq.js";import"./makeExternalStore-DblTGXsz.js";import"./Tooltip-dz2N5tg8.js";import"./PopoverPopup-Qod0bVLX.js";import"./debounce-yaorJZAj.js";import"./useOsdkClient-EQHkO782.js";import"./tick-BoDudvKH.js";import"./DropdownField-Cy9YIgDd.js";import"./isEqual-D5T89AZL.js";import"./withOsdkMetrics-udXbveSG.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
