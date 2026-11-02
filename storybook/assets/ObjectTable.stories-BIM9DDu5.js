import{j as i}from"./iframe-BMD419ka.js";import{O as p}from"./object-table-DklIXUmg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-6lT4UbVn.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CiHZNj21.js";import"./index-kQgthC1n.js";import"./Dialog-Bnf9h6yt.js";import"./cross-C-Zn05Sh.js";import"./svgIconContainer-CHQFiUDX.js";import"./useBaseUiId-BBA3Ojwf.js";import"./InternalBackdrop-BzOsWlKG.js";import"./composite-C219b2sQ.js";import"./index-DoLcuz7h.js";import"./index-CxpxkMGG.js";import"./index-CZl_v7Sd.js";import"./useEventCallback-p3w8y99Z.js";import"./SkeletonBar-DEGMKOtH.js";import"./LoadingCell-CxK7vvT8.js";import"./ColumnConfigDialog-SWCRSzpQ.js";import"./DraggableList-CsKDALQ_.js";import"./search-EKHgMBUJ.js";import"./Input-Bra7C-xN.js";import"./useControlled-7nsHaAUN.js";import"./Button-LjQK0IIe.js";import"./small-cross-Cwk34a2M.js";import"./ActionButton-CTFg_lcv.js";import"./Checkbox-DtJ0hjBX.js";import"./useValueChanged-BsnzqRt6.js";import"./CollapsiblePanel-BRTyuHlQ.js";import"./MultiColumnSortDialog-DYNUSxBw.js";import"./MenuTrigger-BDfHjyma.js";import"./CompositeItem-Bp6sOKGe.js";import"./ToolbarRootContext-COV-S0gg.js";import"./getDisabledMountTransitionStyles-C6hYXqqN.js";import"./getPseudoElementBounds-CHbR_S8R.js";import"./chevron-down-Amjm1ssN.js";import"./index-BRel636c.js";import"./error-3ACxWnPD.js";import"./BaseCbacBanner-BxJHnPjU.js";import"./makeExternalStore-CFbDS87k.js";import"./Tooltip-CS3G91Py.js";import"./PopoverPopup-Cev_zMr-.js";import"./debounce-189bBZdJ.js";import"./useOsdkClient-C_nRFm8v.js";import"./tick-CWpYZ4jJ.js";import"./DropdownField-CJedxo24.js";import"./isEqual-DfX-8s8I.js";import"./withOsdkMetrics-JpL78Mh0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
