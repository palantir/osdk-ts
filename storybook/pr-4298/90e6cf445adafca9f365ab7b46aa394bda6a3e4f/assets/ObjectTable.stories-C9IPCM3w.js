import{j as i}from"./iframe-BUjiwBf5.js";import{O as p}from"./object-table-T218K9GP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CQxQXpA6.js";import"./preload-helper-B6c2vp8P.js";import"./Table-BavlU92v.js";import"./index-CKk_335J.js";import"./Dialog-CXOR505b.js";import"./cross-DMwbX_xt.js";import"./svgIconContainer-B-5qucwe.js";import"./useBaseUiId-C7GiG9Zo.js";import"./InternalBackdrop-BzH1HGPT.js";import"./composite-DKWT5B2T.js";import"./index-DQS8f553.js";import"./index-BXREvfES.js";import"./index-DJII1UoI.js";import"./useEventCallback-CMhzkP6E.js";import"./SkeletonBar-Dhr5qRE5.js";import"./LoadingCell-CEsQO4QS.js";import"./ColumnConfigDialog-CtpCcWgp.js";import"./DraggableList-BfbbCqU-.js";import"./search-DWZ7jrir.js";import"./Input-DrlS66iR.js";import"./useControlled-u72cUfPk.js";import"./Button-DdiFhH1O.js";import"./small-cross-SPUOYKUf.js";import"./ActionButton-DU3dAhJf.js";import"./Checkbox-DIykPK3s.js";import"./useValueChanged-CLO0Bb-9.js";import"./CollapsiblePanel-DQj3H5Sg.js";import"./MultiColumnSortDialog-gWJOz4lo.js";import"./MenuTrigger-C3kS5B-X.js";import"./CompositeItem-BuyG-Xnd.js";import"./ToolbarRootContext-Bw5pjQww.js";import"./getDisabledMountTransitionStyles-C5iHJfar.js";import"./getPseudoElementBounds-DtI19hhj.js";import"./chevron-down-BxUE_6XI.js";import"./index-Bh90kKL7.js";import"./error-Dm0kzNQU.js";import"./BaseCbacBanner-D0xcDype.js";import"./makeExternalStore-DQVcY1um.js";import"./Tooltip-D3YkEYkV.js";import"./PopoverPopup-DozBvSpZ.js";import"./debounce-66rESf0W.js";import"./useOsdkClient-CKRo4EpN.js";import"./tick-4j-y4QUt.js";import"./DropdownField-Cb0C-mKV.js";import"./isEqual-whmmFY8e.js";import"./withOsdkMetrics-DPL7FlTV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
