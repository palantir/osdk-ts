import{j as i}from"./iframe-BrczSXWd.js";import{O as p}from"./object-table-D2NYr_bA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bor4BlRd.js";import"./preload-helper-C9BY0Y3l.js";import"./Table-BA80nWKR.js";import"./index-DudA86qY.js";import"./Dialog-Bih-9NwC.js";import"./cross-Ru6xXr8E.js";import"./svgIconContainer-CE-3RmSd.js";import"./useBaseUiId-BAdjTZxi.js";import"./InternalBackdrop-985pZM4u.js";import"./composite-Bm0YB8hl.js";import"./index-BNKav9tw.js";import"./index-DjqiYrmI.js";import"./index-O3AskpOE.js";import"./useEventCallback-BQlx-yAT.js";import"./SkeletonBar-BrWUMOMm.js";import"./LoadingCell-DbJ-o34E.js";import"./ColumnConfigDialog-DGgd9sJY.js";import"./DraggableList-CTf3QPXN.js";import"./search-BIr2ECst.js";import"./Input-B6lE5n2S.js";import"./useControlled-rjkFsMU4.js";import"./Button-DCegplHy.js";import"./small-cross-joSiLnnY.js";import"./ActionButton-BArH-a0x.js";import"./Checkbox-D0Mkme1h.js";import"./useValueChanged-BQ2NGAKU.js";import"./CollapsiblePanel-CsAiwkqy.js";import"./MultiColumnSortDialog-eJQvbRjM.js";import"./MenuTrigger-CL4ez-GT.js";import"./CompositeItem-BJcTRkcm.js";import"./ToolbarRootContext-BTk5x8Vt.js";import"./getDisabledMountTransitionStyles-BeD1AelW.js";import"./getPseudoElementBounds-PdvQmR0i.js";import"./chevron-down-Bqbgyapn.js";import"./index-HlCA-cEl.js";import"./error-CUc0NJXd.js";import"./BaseCbacBanner-Bh9Y43TL.js";import"./makeExternalStore-C7i3F044.js";import"./Tooltip-YOTilwd1.js";import"./PopoverPopup-rbPcompC.js";import"./debounce-DXJT-xl2.js";import"./useOsdkClient-CVk0RIIh.js";import"./tick-DqGJ_cyI.js";import"./DropdownField-D1lbpORr.js";import"./isEqual-CusS7w8u.js";import"./withOsdkMetrics-DGpmb3Iv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
