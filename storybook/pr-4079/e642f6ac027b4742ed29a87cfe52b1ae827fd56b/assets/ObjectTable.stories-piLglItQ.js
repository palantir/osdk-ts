import{j as i}from"./iframe-C-JZ09HL.js";import{O as p}from"./object-table-eCdmFUXr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C-_c3d8Q.js";import"./preload-helper-Btqf0-MW.js";import"./Table-DMQ_nPm6.js";import"./index-BXkYmYaL.js";import"./Dialog-CWLeV2jh.js";import"./cross-CDvt64dz.js";import"./svgIconContainer-GnFqEV7J.js";import"./useBaseUiId-C6m1fY6X.js";import"./InternalBackdrop-DgDyp4Vo.js";import"./composite-BHrzkL3j.js";import"./index-B9W8VWla.js";import"./index-CWTT4E5c.js";import"./index-DyndQNLM.js";import"./useEventCallback-Is75DRLj.js";import"./SkeletonBar-DHUwfY6j.js";import"./LoadingCell-pQiUA7Bk.js";import"./ColumnConfigDialog-B7EAN3Um.js";import"./DraggableList-CxlXcFDc.js";import"./search-CRF0d4U_.js";import"./Input-9fM_pp7v.js";import"./useControlled-BnCuZsdw.js";import"./Button-DnUlyK7a.js";import"./small-cross-CQkeoWBO.js";import"./ActionButton-8JqznqV-.js";import"./Checkbox-DPup6C7p.js";import"./useValueChanged-hvB4Sogv.js";import"./CollapsiblePanel-BEbz9zc7.js";import"./MultiColumnSortDialog-qFPV76Nw.js";import"./MenuTrigger-C36tHorX.js";import"./CompositeItem-1x61Rlw0.js";import"./ToolbarRootContext-CcljaRm4.js";import"./getDisabledMountTransitionStyles-BaR3xwN0.js";import"./getPseudoElementBounds-DEDKJbcP.js";import"./chevron-down-l-lKjlka.js";import"./index-DKkkLjbn.js";import"./error-jL4dzDGt.js";import"./BaseCbacBanner-CWi2u_SR.js";import"./makeExternalStore-CHVbKC8p.js";import"./Tooltip-By6nOBFb.js";import"./PopoverPopup-tZcqIDwv.js";import"./debounce-DuRZaOgZ.js";import"./useOsdkClient-w30RoI3v.js";import"./tick-BF72g7TU.js";import"./DropdownField-VLHRRTtJ.js";import"./isEqual-D6XdnbH2.js";import"./withOsdkMetrics-Das8js_L.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
