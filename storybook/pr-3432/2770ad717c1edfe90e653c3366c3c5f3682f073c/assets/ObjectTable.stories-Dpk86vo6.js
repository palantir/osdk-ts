import{j as i}from"./iframe-q8TqaLH3.js";import{O as p}from"./object-table-Du6BlrzP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CEHCYVjR.js";import"./preload-helper-DW1Ev6LV.js";import"./Table-BYuHhB_Z.js";import"./index-BYCDoymk.js";import"./Dialog-7PnlGPiI.js";import"./cross-CC6OhIc-.js";import"./svgIconContainer-Dw59Q1hS.js";import"./useBaseUiId-CEQxwZKC.js";import"./InternalBackdrop--UCUdWww.js";import"./composite-DwvjAbMd.js";import"./index-CzfA3f8l.js";import"./index-BA8MKOgZ.js";import"./index-gnsaR6Uu.js";import"./useEventCallback-B4W_Onhb.js";import"./SkeletonBar-DqiAtf8L.js";import"./LoadingCell-DUy1iEUv.js";import"./ColumnConfigDialog-D4d7vU4L.js";import"./DraggableList-C-mgkqp0.js";import"./search-4HwTJMyt.js";import"./Input-DydicY3I.js";import"./useControlled-B4XgETbD.js";import"./Button-Cf0RXVA2.js";import"./small-cross-DvbT-Lty.js";import"./ActionButton-LZnsky5E.js";import"./Checkbox-b7LEJiYE.js";import"./useValueChanged-d_s2F3nd.js";import"./CollapsiblePanel-BS7S2lzj.js";import"./MultiColumnSortDialog-DJ1Kn_Ji.js";import"./MenuTrigger-BGwKkoMp.js";import"./CompositeItem-BoyD2Qd7.js";import"./ToolbarRootContext-BVkFyPPc.js";import"./getDisabledMountTransitionStyles-5oGVyyuS.js";import"./getPseudoElementBounds-BCT9ycAq.js";import"./chevron-down-DObWy-ia.js";import"./index-BiU-aGVE.js";import"./error-ClxxhlMY.js";import"./BaseCbacBanner-DTBo9MQF.js";import"./makeExternalStore-DCFTRovx.js";import"./Tooltip-AsdusrkJ.js";import"./PopoverPopup-B86RQsKi.js";import"./debounce-CCkbSKz6.js";import"./useOsdkClient-Ci_ciLOY.js";import"./tick-Dip5FQjE.js";import"./DropdownField-BJ7jRxa-.js";import"./isEqual-DK8wF8M6.js";import"./withOsdkMetrics-CEeAFO7b.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
