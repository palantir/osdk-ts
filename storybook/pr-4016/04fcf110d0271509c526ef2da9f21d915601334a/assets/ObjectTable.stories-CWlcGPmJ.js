import{j as i}from"./iframe-DCMw_0TW.js";import{O as p}from"./object-table-Ccj31N5H.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DgbZxwV_.js";import"./preload-helper-nzNuDSAv.js";import"./Table-Dm-UUELM.js";import"./index-tQLNAeTv.js";import"./Dialog-Dnb7OeiM.js";import"./cross-orOEa1Of.js";import"./svgIconContainer-BuqYbofr.js";import"./useBaseUiId-D30K99H9.js";import"./InternalBackdrop-BB5KU1pv.js";import"./composite-BEUqKf6u.js";import"./index-Dk4-JQXx.js";import"./index-Xc5_iOPx.js";import"./index-DGqnKBQq.js";import"./useEventCallback-Dlb3_nai.js";import"./SkeletonBar-DGgKxMsR.js";import"./LoadingCell-Bo92g5D3.js";import"./ColumnConfigDialog-svntpNOd.js";import"./DraggableList-dWs199Tn.js";import"./search-3SCesORj.js";import"./Input-Ct67CszU.js";import"./useControlled-glFhf02I.js";import"./Button-DrHRwo7L.js";import"./small-cross-bQOb3ZfY.js";import"./ActionButton-CqBl5clt.js";import"./Checkbox-CC3H_6dm.js";import"./useValueChanged-BExaB3du.js";import"./CollapsiblePanel-udeHAS2R.js";import"./MultiColumnSortDialog-Z4gbQ2sB.js";import"./MenuTrigger-BHi5YxlN.js";import"./CompositeItem-DAFo6DYX.js";import"./ToolbarRootContext-DAgpPS14.js";import"./getDisabledMountTransitionStyles-DePFxOFo.js";import"./getPseudoElementBounds-DTBnQrKu.js";import"./chevron-down-CwIymZzb.js";import"./index-B3cn-YUq.js";import"./error-CThwrDAU.js";import"./BaseCbacBanner-HqMibrZO.js";import"./makeExternalStore-CaxsUcIE.js";import"./Tooltip-BIR0svY2.js";import"./PopoverPopup-D-oy58Yh.js";import"./debounce-B-rnFVFg.js";import"./useOsdkClient-wDDgD5tN.js";import"./tick-DWb-Pi96.js";import"./DropdownField-5tJgHFby.js";import"./isEqual-eGrV7ep1.js";import"./withOsdkMetrics-Cz4cYYHT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
