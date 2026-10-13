import{j as i}from"./iframe-Cnqo8JoO.js";import{O as p}from"./object-table-BjTN_yj-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BQy-MBg-.js";import"./preload-helper-DB7HrsLr.js";import"./Table-BsL0om5s.js";import"./index-DPLneUTO.js";import"./Dialog-DGZCWUEd.js";import"./cross-L-SNvRGg.js";import"./svgIconContainer-CSxRudGe.js";import"./useBaseUiId-CMntNwg3.js";import"./InternalBackdrop-CJ-eceSN.js";import"./composite-DaaqoGoy.js";import"./index-CwsDo0MO.js";import"./index-CKI4qvj-.js";import"./index-BJ_GXgk1.js";import"./useEventCallback-B62oHhCV.js";import"./SkeletonBar-Bxqkbprw.js";import"./LoadingCell-NEkiFIgV.js";import"./ColumnConfigDialog-OplMWAkK.js";import"./DraggableList-B-dJ0pBW.js";import"./search-Bfy7kx1g.js";import"./Input-DB0BU6v_.js";import"./useControlled-D7Uij8uU.js";import"./Button-ChrgAtHr.js";import"./small-cross-CHaVBd3F.js";import"./ActionButton-CwRBsdhk.js";import"./Checkbox-aisDczTH.js";import"./useValueChanged-Bs1dvRlB.js";import"./CollapsiblePanel-fS7hUv8f.js";import"./MultiColumnSortDialog-DRMLHk2T.js";import"./MenuTrigger-BgvD7W9R.js";import"./CompositeItem-Cx-1EMH-.js";import"./ToolbarRootContext-BP77INzo.js";import"./getDisabledMountTransitionStyles-FfoApt6d.js";import"./getPseudoElementBounds-C015kcjA.js";import"./chevron-down-T8AVx82S.js";import"./index-BDFdu6IJ.js";import"./error-DWCGh03E.js";import"./BaseCbacBanner-BhbOlb4V.js";import"./makeExternalStore-BgRsNlcL.js";import"./Tooltip-CHepNGwK.js";import"./PopoverPopup-CAsTwxkG.js";import"./debounce-DdinpU2x.js";import"./useOsdkClient-6VKDxm1Q.js";import"./tick-BdumFRCq.js";import"./DropdownField-DRUiHbSz.js";import"./isEqual-DKp7-gCn.js";import"./withOsdkMetrics-C2CbSeLM.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
