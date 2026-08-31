import{j as i}from"./iframe-A9SMdxTk.js";import{O as p}from"./object-table-SMZwmdv_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CBr9ZXMI.js";import"./preload-helper-DQLolCHZ.js";import"./Table-Dt18qZF-.js";import"./index-CCGgfNub.js";import"./Dialog-CxTZ5sEs.js";import"./cross-2Xnw9coj.js";import"./svgIconContainer-CNaxbSBM.js";import"./useBaseUiId-B4Zg0t3a.js";import"./InternalBackdrop-CjvwhqTr.js";import"./composite-7A3yZ68G.js";import"./index-DVtEeQpM.js";import"./index-u-M_bDzq.js";import"./index-DSNNOMbW.js";import"./useEventCallback-Cs7j8rjy.js";import"./SkeletonBar-Bsavensj.js";import"./LoadingCell-MuKAq9ox.js";import"./ColumnConfigDialog-BPaq44ED.js";import"./DraggableList-enJHXPWW.js";import"./search-Bmlhhw47.js";import"./Input-deyBktI2.js";import"./useControlled-BfWlfukP.js";import"./Button-BqU3-dcX.js";import"./small-cross-L7YPfTAg.js";import"./ActionButton-SqRrJytR.js";import"./Checkbox-DnbmlZ-x.js";import"./useValueChanged-DoC4-4sS.js";import"./CollapsiblePanel-pH-Ll-5X.js";import"./MultiColumnSortDialog-Bu7YdQ1a.js";import"./MenuTrigger-yNgCAx0M.js";import"./CompositeItem-B_0BvpK8.js";import"./ToolbarRootContext-bZyAVUWu.js";import"./getDisabledMountTransitionStyles-DPN9mdtk.js";import"./getPseudoElementBounds-DnEf810H.js";import"./chevron-down-B5VXYyUb.js";import"./index-Vl3wc69p.js";import"./error-Bs_ECeoC.js";import"./BaseCbacBanner-DG7waKo_.js";import"./makeExternalStore-DS1IY1Cv.js";import"./Tooltip-CvmQ17Y-.js";import"./PopoverPopup-PlkIfJuv.js";import"./debounce-CJPgIkeW.js";import"./useOsdkClient-DlYGuUgU.js";import"./tick-d3JyzzOo.js";import"./DropdownField-B59uqojr.js";import"./isEqual-89fgiQle.js";import"./withOsdkMetrics-Drgty0Zj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
