import{j as i}from"./iframe-D-ZGqhox.js";import{O as p}from"./object-table-DjGi5wvU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CCfs0eat.js";import"./preload-helper-BHmHhg6q.js";import"./Table-SgKDRKfa.js";import"./index-DMbZcvzJ.js";import"./Dialog-DjOrzyf2.js";import"./cross-C-5SE6cr.js";import"./svgIconContainer-DynaZTrl.js";import"./useBaseUiId-UHE7cq6V.js";import"./InternalBackdrop-C63SxHNb.js";import"./composite-BwjOgotZ.js";import"./index-LOlNiB8m.js";import"./index-BaNxBZm4.js";import"./index-DGIXwIHP.js";import"./useEventCallback-CBryEak9.js";import"./SkeletonBar-BP7hF3Zr.js";import"./LoadingCell-B8_ljK48.js";import"./ColumnConfigDialog-Wnv2YTUh.js";import"./DraggableList-Diafxmz7.js";import"./search-Df3zpGfV.js";import"./Input-Cb6mwwI7.js";import"./useControlled-DZViTlY6.js";import"./Button-BX_hSGAP.js";import"./small-cross-zLLYVOtd.js";import"./ActionButton-BTMY82P_.js";import"./Checkbox-Stmc3Nfw.js";import"./useValueChanged-B65vtIly.js";import"./CollapsiblePanel-DTrAe8QH.js";import"./MultiColumnSortDialog-dSGIxCbt.js";import"./MenuTrigger-D2cmTfVi.js";import"./CompositeItem-BUGdCkRP.js";import"./ToolbarRootContext-C0KaRFai.js";import"./getDisabledMountTransitionStyles-BrJtjLyN.js";import"./getPseudoElementBounds-Ds3bNVw-.js";import"./chevron-down-TA05iMki.js";import"./index-DtE8_iZZ.js";import"./error-I7Ps8uLh.js";import"./BaseCbacBanner-5SFPBYFJ.js";import"./makeExternalStore-BUNud_OP.js";import"./Tooltip-DsJKDnDl.js";import"./PopoverPopup-DmqcRuFP.js";import"./debounce-CEBh1i8u.js";import"./useOsdkClient-_IYUYQJJ.js";import"./tick-Cm9W0Mqj.js";import"./DropdownField-WB5QGntE.js";import"./isEqual-DYkX0s92.js";import"./withOsdkMetrics-CNUwJgZ9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
