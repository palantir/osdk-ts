import{j as i}from"./iframe-Bb7nZlGl.js";import{O as p}from"./object-table-CtZBle9Q.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C9PwUjv7.js";import"./preload-helper-5_2IOymj.js";import"./Table-DFA53aoo.js";import"./index-Ds72fwLq.js";import"./Dialog-jQw37vHq.js";import"./cross-BbGuk08-.js";import"./svgIconContainer-vUElkusf.js";import"./useBaseUiId-gkexnSBj.js";import"./InternalBackdrop-63ir8mIJ.js";import"./composite-B2CTevqe.js";import"./index-COCL-ZTE.js";import"./index-Dfd0f2n1.js";import"./index-BXoUKmrd.js";import"./useEventCallback-B0zZllci.js";import"./SkeletonBar-BGXWiCiL.js";import"./LoadingCell-D762gnJ2.js";import"./ColumnConfigDialog-D2jmUrOi.js";import"./DraggableList-Dw-BX5gx.js";import"./search-bXEtlzR1.js";import"./Input-xAYKVEpU.js";import"./useControlled-DB1jFnZJ.js";import"./isEqual-BTjZRe2t.js";import"./isObject-CQ3JilxR.js";import"./Button-B4bVBPgy.js";import"./ActionButton-Djhe9b2b.js";import"./Checkbox-CEZKgJYE.js";import"./useValueChanged-DnvzeC25.js";import"./CollapsiblePanel-8fEP_8qz.js";import"./MultiColumnSortDialog-BJeN8pFT.js";import"./MenuTrigger-BKRSjLYB.js";import"./CompositeItem-C4TcP1sN.js";import"./ToolbarRootContext-C-Jy6dbc.js";import"./getDisabledMountTransitionStyles-BW80yZdJ.js";import"./getPseudoElementBounds-SnXk6ZE7.js";import"./chevron-down-5D_xsBS1.js";import"./index-DcZR_HTv.js";import"./error-lsghjmGP.js";import"./BaseCbacBanner-dz77SKbE.js";import"./makeExternalStore-Dp2HdhKw.js";import"./Tooltip-nWI-M1JB.js";import"./PopoverPopup-DwjVgw15.js";import"./toNumber-qhHK68iw.js";import"./useOsdkClient-3ofSw2lH.js";import"./tick-BpKOiJSQ.js";import"./DropdownField-D29BtsXj.js";import"./withOsdkMetrics-DRtLXghB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
