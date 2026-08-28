import{j as i}from"./iframe-DWvzDoTE.js";import{O as p}from"./object-table-8nYiaszu.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DEsPu1cy.js";import"./preload-helper-ByL0Uuda.js";import"./Table-D0j1LDAV.js";import"./index-BBS1h8cn.js";import"./Dialog-CSZr3sQl.js";import"./cross--Y2f0GiD.js";import"./svgIconContainer-BhadlONA.js";import"./useBaseUiId-CMlf_How.js";import"./InternalBackdrop-Cf-iMcVw.js";import"./composite-BIHrvkj3.js";import"./index-BQWPPGSx.js";import"./index-q_1-gxWd.js";import"./index-cn8ZGUe5.js";import"./useEventCallback-CLbs7kRX.js";import"./SkeletonBar-Dh1OEZAF.js";import"./LoadingCell-BezJaplu.js";import"./ColumnConfigDialog-DAotHv7w.js";import"./DraggableList-BTEdgyZX.js";import"./search-BObskws0.js";import"./Input-DiGaV4rJ.js";import"./useControlled-DfUZjtJU.js";import"./Button-DwyCCUCH.js";import"./small-cross-Ci3vpnc1.js";import"./ActionButton-CgSZK0K1.js";import"./Checkbox-CSrcKRpx.js";import"./useValueChanged-Cub_cMIY.js";import"./CollapsiblePanel-CFHmzmB0.js";import"./MultiColumnSortDialog-B01Dc84v.js";import"./MenuTrigger-Df2Y7rGo.js";import"./CompositeItem-DeeOISel.js";import"./ToolbarRootContext-B7EsbN7p.js";import"./getDisabledMountTransitionStyles-C1rCgQf8.js";import"./getPseudoElementBounds-B5N3m30C.js";import"./chevron-down-BZ6p4J3G.js";import"./index-Bu_tjXun.js";import"./error-DJSg9FwQ.js";import"./BaseCbacBanner-B_OmK-25.js";import"./makeExternalStore-BresugQV.js";import"./Tooltip-DoT3m1bO.js";import"./PopoverPopup-CbJaaqPE.js";import"./debounce-DNUqOVJ3.js";import"./useOsdkClient-s2lA0VPO.js";import"./tick-BiKiKjho.js";import"./DropdownField-CDx_h5d6.js";import"./isEqual-CO1MvszY.js";import"./withOsdkMetrics-5t1Ggpdt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
