import{j as i}from"./iframe-DwHN39Jj.js";import{O as p}from"./object-table-DffhlyGO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cr7tupQf.js";import"./preload-helper-TQIKMTBe.js";import"./Table-wolDvqJe.js";import"./index-Bnvv13O1.js";import"./Dialog-BBNsESMo.js";import"./cross-DiSoPuVQ.js";import"./svgIconContainer-D3xSNEvE.js";import"./useBaseUiId-BuiLz8Kz.js";import"./InternalBackdrop-Ct27ouGs.js";import"./composite-BHUO4-On.js";import"./index-yATLLLgy.js";import"./index-DdofC8Tl.js";import"./index-BCjzN-kH.js";import"./useEventCallback-Dgfv8zRH.js";import"./SkeletonBar-B2OK7PfD.js";import"./LoadingCell-DREadf8T.js";import"./ColumnConfigDialog-CHJeGomQ.js";import"./DraggableList-BkZnJPMZ.js";import"./search-60c5efTm.js";import"./Input-C40ac1xS.js";import"./useControlled-B5wlEGdC.js";import"./Button-BYP0P9Ib.js";import"./small-cross-DyCNle2m.js";import"./ActionButton-DjDKHZFu.js";import"./Checkbox-BSX5bz10.js";import"./useValueChanged-2oQS-uEU.js";import"./CollapsiblePanel-D9qMD8XV.js";import"./MultiColumnSortDialog-PDW2qhn_.js";import"./MenuTrigger-DTllJkLA.js";import"./CompositeItem-BQu1HqMn.js";import"./ToolbarRootContext-C0072MJ6.js";import"./getDisabledMountTransitionStyles-BgNKG7FQ.js";import"./getPseudoElementBounds-D0-vuA8S.js";import"./chevron-down-DzHcaasw.js";import"./index-st8A3vYR.js";import"./error-B0Y2Fvc9.js";import"./BaseCbacBanner-B6x908m9.js";import"./makeExternalStore-DbPOioRC.js";import"./Tooltip-BQlEvxbG.js";import"./PopoverPopup-Bogu5QY8.js";import"./debounce-B2i6LMnR.js";import"./useOsdkClient-C2Vmxc_K.js";import"./tick-TwV86bBe.js";import"./DropdownField-DQTgwTYN.js";import"./isEqual-DuJXPvSG.js";import"./withOsdkMetrics-CvR6KWeT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
