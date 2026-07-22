import{j as i}from"./iframe-DjtcYyzQ.js";import{O as p}from"./object-table-Cx1-aOJU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-4iuChe0L.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DHuR451x.js";import"./index-CQV6Rnc6.js";import"./Dialog-y15XJOsn.js";import"./cross-B6N8rLM4.js";import"./svgIconContainer-JU7cmdzA.js";import"./useBaseUiId-kxFdZqtD.js";import"./InternalBackdrop-CpQyJmy1.js";import"./composite-B_imHkJV.js";import"./index-CBxdpb96.js";import"./index-D8ZMhwwx.js";import"./index-C3TnBhfz.js";import"./useEventCallback-6rPOrUpt.js";import"./SkeletonBar-BgTk6Y9n.js";import"./LoadingCell-M9yCnm6K.js";import"./ColumnConfigDialog-BahuG4eK.js";import"./DraggableList-D-6R4oYR.js";import"./search-DFIZPiTI.js";import"./Input-eiOZqsyQ.js";import"./useControlled-DggWxDeY.js";import"./isEqual-CHBEhNJy.js";import"./isObject-BLUbfgBE.js";import"./Button-yoR8DJA2.js";import"./ActionButton-aTqycEsf.js";import"./Checkbox-CKKTGtLY.js";import"./useValueChanged-C91I9lSd.js";import"./CollapsiblePanel-BE0pKmrr.js";import"./MultiColumnSortDialog-BE-Xqeny.js";import"./MenuTrigger-qUgny5m-.js";import"./CompositeItem-pjHtEKS0.js";import"./ToolbarRootContext-DHGJfn9d.js";import"./getDisabledMountTransitionStyles-C83r2vCZ.js";import"./getPseudoElementBounds-D-8MIy1t.js";import"./chevron-down-E7YHgJne.js";import"./index-BGI_7tkx.js";import"./error-DLG18jLw.js";import"./BaseCbacBanner-Be-6Cqba.js";import"./makeExternalStore-CDqT4QNq.js";import"./Tooltip-D6VePCFP.js";import"./PopoverPopup-qaWHhtAH.js";import"./toNumber-ptw9YKMz.js";import"./useOsdkClient-B-T-pdfR.js";import"./tick-DVtbxPft.js";import"./DropdownField-CVFWI8Ck.js";import"./withOsdkMetrics-m3U67gAP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
