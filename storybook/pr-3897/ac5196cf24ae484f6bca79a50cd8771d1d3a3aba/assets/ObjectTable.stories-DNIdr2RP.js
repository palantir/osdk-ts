import{j as i}from"./iframe-Bk-88sEf.js";import{O as p}from"./object-table-DLbz3v7t.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C-Fg71P6.js";import"./preload-helper-DvYlXxAP.js";import"./Table-w2KwEraW.js";import"./index-CdHmGUcS.js";import"./Dialog-Cse2Ob6V.js";import"./cross-CzjMymPe.js";import"./svgIconContainer-CJ_w5BhJ.js";import"./useBaseUiId-DES5vLxx.js";import"./InternalBackdrop-2wnNc0zw.js";import"./composite-BXvRBvIS.js";import"./index-DGx-W2pO.js";import"./index-6f90H5TT.js";import"./index-BR7LTQOs.js";import"./useEventCallback-DqbTsOIO.js";import"./SkeletonBar-CyJN-Xjm.js";import"./LoadingCell-R780WQSC.js";import"./ColumnConfigDialog-DpSlK8Z8.js";import"./DraggableList-c_O2vsqv.js";import"./search-Cyt-_x8X.js";import"./Input-U7zXtF1y.js";import"./useControlled-Cf_AiB9R.js";import"./Button-DB1Qd4Ey.js";import"./small-cross-DaPzMpTC.js";import"./ActionButton-BJA2YejZ.js";import"./Checkbox-B9A5gIer.js";import"./useValueChanged-woSaOMyv.js";import"./CollapsiblePanel-wakff4ru.js";import"./MultiColumnSortDialog-CZyyzg1l.js";import"./MenuTrigger-BnRYX-HV.js";import"./CompositeItem-DFySnHOB.js";import"./ToolbarRootContext-CXOIvMk7.js";import"./getDisabledMountTransitionStyles-laX3tK9e.js";import"./getPseudoElementBounds-DToJELRK.js";import"./chevron-down-BZoWzWGC.js";import"./index-CowKu27H.js";import"./error-2_AseInf.js";import"./BaseCbacBanner-D4QCiXA1.js";import"./makeExternalStore-OahYSLFz.js";import"./Tooltip-CTK12_Si.js";import"./PopoverPopup-BuuLyK1V.js";import"./debounce-BH4BBh9a.js";import"./useOsdkClient-p7Hx3gk-.js";import"./tick-CO3pOylc.js";import"./DropdownField-pgFmM9K7.js";import"./isEqual-BijyGCHx.js";import"./withOsdkMetrics-CcAilitW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
