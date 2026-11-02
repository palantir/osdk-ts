import{j as i}from"./iframe-gwjWh6aP.js";import{O as p}from"./object-table-DG0XU0Qa.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cldw2kc8.js";import"./preload-helper-bIyT3R7b.js";import"./Table-CqQWX-38.js";import"./index-B2e6YLgb.js";import"./Dialog-B752LhdZ.js";import"./cross-CxSJV-iM.js";import"./svgIconContainer-uf6Xe766.js";import"./useBaseUiId-MuGd9EbB.js";import"./InternalBackdrop-Be_icURP.js";import"./composite-XNngWcyG.js";import"./index-C2Xm0Ig8.js";import"./index-CctUI8eo.js";import"./index-DqPPge5H.js";import"./useEventCallback-g73YrOE1.js";import"./SkeletonBar-MPFiyDqC.js";import"./LoadingCell-CSktdyFh.js";import"./ColumnConfigDialog-BiRQ2H7x.js";import"./DraggableList-BSD24ZFv.js";import"./search-77UZhWyC.js";import"./Input-B14JiyW9.js";import"./useControlled-BRAT0rWw.js";import"./Button-DYsrDr-V.js";import"./small-cross-DFJo2BXV.js";import"./ActionButton-DUFTPwmt.js";import"./Checkbox-BGGgt2SZ.js";import"./useValueChanged-Cq6kIfvu.js";import"./CollapsiblePanel-zc_GBnu-.js";import"./MultiColumnSortDialog-DB-NI1_-.js";import"./MenuTrigger-J5s3L2h9.js";import"./CompositeItem-B632hz3W.js";import"./ToolbarRootContext-eiDeLXye.js";import"./getDisabledMountTransitionStyles-CdwEI3h2.js";import"./getPseudoElementBounds-Cors6fEL.js";import"./chevron-down-Bpsf2br_.js";import"./index-BjKGneLm.js";import"./error-CG0c4OaM.js";import"./BaseCbacBanner-BwibHyrW.js";import"./makeExternalStore-DOMUefpT.js";import"./Tooltip-a4Yw_fKw.js";import"./PopoverPopup-gtrR7YRy.js";import"./debounce-nVQqP8JB.js";import"./useOsdkClient-DKJIj3oZ.js";import"./tick-mEiPhkv2.js";import"./DropdownField-Du154yBU.js";import"./isEqual-B4RlLHXD.js";import"./withOsdkMetrics-CT1e8NKK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
