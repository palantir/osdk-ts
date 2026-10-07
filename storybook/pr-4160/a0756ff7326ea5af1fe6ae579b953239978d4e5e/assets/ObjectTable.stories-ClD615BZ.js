import{j as i}from"./iframe-BMLtitQA.js";import{O as p}from"./object-table-y9i5UT5J.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CpWPTwDL.js";import"./preload-helper-B7zvwNzg.js";import"./Table-DH-wZ72m.js";import"./index-BKoaBi8s.js";import"./Dialog-3laZpvVQ.js";import"./cross-B9AlOyDj.js";import"./svgIconContainer-DG_uvfKl.js";import"./useBaseUiId-Bv7ijZL9.js";import"./InternalBackdrop-CHrkdZLj.js";import"./composite-0pBAMAMm.js";import"./index-1wGhlHyg.js";import"./index-G040djXj.js";import"./index-AqEp1dK7.js";import"./useEventCallback-DBFZ4mZ7.js";import"./SkeletonBar-BrybbI32.js";import"./LoadingCell-C_9ZXwvH.js";import"./ColumnConfigDialog-nYNMKvUs.js";import"./DraggableList-BaEa-CAp.js";import"./search-CINj6xtb.js";import"./Input-D3mEoBXJ.js";import"./useControlled-BSRFoePA.js";import"./Button-eAAIImFA.js";import"./small-cross-Cu-xAWUl.js";import"./ActionButton-BE8P3Fn6.js";import"./Checkbox-BR1FtCPB.js";import"./useValueChanged-3DIww79j.js";import"./CollapsiblePanel-DJu6yMtL.js";import"./MultiColumnSortDialog-llKG8jOZ.js";import"./MenuTrigger-y3laeChq.js";import"./CompositeItem-FfLXXCMg.js";import"./ToolbarRootContext-C3i3QER6.js";import"./getDisabledMountTransitionStyles-CmHRQiW3.js";import"./getPseudoElementBounds-C6QupuvE.js";import"./chevron-down-BmGdKwgH.js";import"./index-Dq5rNNxI.js";import"./error-DwpvxQx3.js";import"./BaseCbacBanner--wPp9JQT.js";import"./makeExternalStore-6yj2j-8e.js";import"./Tooltip-Bk1044gE.js";import"./PopoverPopup-CFeC_ntr.js";import"./debounce-CQ_Rs17S.js";import"./useOsdkClient-DL7Kf8Sx.js";import"./tick-BiexrdJO.js";import"./DropdownField-Dinvefr-.js";import"./isEqual-B25MsUYt.js";import"./withOsdkMetrics-Bco6NPuI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
